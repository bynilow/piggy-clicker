import { useCoins, useUser } from '@/entities/User';
import { Error, getAmountWithPercent, getFormattedCoins, Loader, Modal, OfflineIncome, useBoostsStore, useModal, useUserStore } from '@/shared';
import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { MainPage } from '../MainPage';
import * as S from './Layout.styles';
import { useBoosts } from '@/entities/Boost';
import axios from 'axios';
import { API_ENDPOINT, MAX_OFFLINE_TIME_IN_SECONDS } from '@/shared/constants';
import dayjs from 'dayjs';

const tg = window.Telegram.WebApp;

const GlobalStyles = createGlobalStyle`
    :root {
        --text-primary: #fff;
        --text-secondary: #a0a0a0;
        --bg-secondary: #21222d;
        --accent-color: #a9dfd8;
    }

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Nunito", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        color: #fff;
    }

    * {
        box-sizing: border-box;
        touch-action: manipulation;
        user-select: none;

        &::-webkit-scrollbar { width: 0; }
    }

    img {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: none;
    }
`

const Layout = () => {

    const { isOpen, closeModal, modalContent, canCloseOutside } = useModal();

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    const userId = tg?.initDataUnsafe?.user?.id || 1337;
    const userName = tg?.initDataUnsafe?.user?.username || 'test_user';

    const { userData, userError, userIsLoading, createUser } = useUser(userId, userName);
    const { boostIsLoading, boostsError, boostsData } = useBoosts();
    const { perSecond, incomeMultiplier } = useBoostsStore();
    const { addCoins } = useCoins();
    const { addCoinsStore } = useUserStore();

    const [isAcceptedOfflineIncome, setIsAcceptedOfflineIncome] = useState(false);

    useEffect(() => {
        if (!userData?.id && !userIsLoading) {
            alert(tg.initDataUnsafe.start_param)
            createUser({ user_id: userId, username: userName, reffered_by: 0 });
        }
        if (userId) {
            localStorage.user_id = userId;
        }
    }, [userData])

    useEffect(() => {
        tg.ready();
    }, [])

    useEffect(() => {
        let sendInterval: NodeJS.Timeout | null = null;
        let addInterval: NodeJS.Timeout | null = null;

        const ONE_SECOND = 1000;

        if (boostsData?.length && userData && perSecond) {
            addInterval = setInterval(() => {
                addCoinsStore(getAmountWithPercent(perSecond, incomeMultiplier));
            }, ONE_SECOND)

            sendInterval = setInterval(() => {
                addCoins({ user_id: userData.id, coins: getAmountWithPercent(perSecond, incomeMultiplier) * 10 })
            }, ONE_SECOND * 10);
        }

        return sendInterval && addInterval
            ? () => {
                clearInterval(sendInterval);
                clearInterval(addInterval);
            }
            : undefined;
    }, [boostsData, userData, perSecond, incomeMultiplier]);

    const { openModal } = useModal();

    useEffect(() => {
        if (userData && perSecond && !isAcceptedOfflineIncome && userData.last_visited_date) {
            const currentDateTime = new Date().getTime();
            const lastVisitedDateTime = new Date(userData.last_visited_date).getTime();
            const dateTimeDiffInSeconds = Math.abs(currentDateTime - lastVisitedDateTime) / 1000;

            const totalGoneTimeInSeconds = dateTimeDiffInSeconds > MAX_OFFLINE_TIME_IN_SECONDS ? MAX_OFFLINE_TIME_IN_SECONDS : dateTimeDiffInSeconds;

            const totalEarnedAmount = getAmountWithPercent(perSecond, incomeMultiplier) * totalGoneTimeInSeconds;

            addCoins({ coins: totalEarnedAmount, user_id: userData.id });
            addCoinsStore(totalEarnedAmount);

            setIsAcceptedOfflineIncome(true);

            openModal(<OfflineIncome earnedCoins={totalEarnedAmount} timeGoneInSeconds={totalGoneTimeInSeconds} />, true)
        }
    }, [userData, perSecond])

    const [allUsers, setAllUsers] = useState<{ username: string, coins: number }[]>([]);

    const fetchAllUsers = async () => {
        const { data } = await axios.get(`${API_ENDPOINT}/api/users`);
        setAllUsers(data);
    }

    useEffect(() => {
        fetchAllUsers();

        const interval = setInterval(() => {
            fetchAllUsers();
        }, 5000)

        return () => clearInterval(interval);
    }, []);

    const canRenderMainPage = userData?.id && !userError && !userIsLoading && !boostsError && !boostIsLoading;

    return (
        <>
            <div style={{
                position: 'absolute',
                zIndex: 2,
                background: 'black',
                bottom: 100,
                left: 0,
                fontSize: 12,
                opacity: 0.5,
                pointerEvents: 'none'
            }}>
                {
                    userData?.reffered_by && `Приглашен игроком - ${userData?.reffered_by}`
                }
                {
                    allUsers.map((user) => (
                        <div>{user?.username} - {getFormattedCoins(user.coins)}</div>
                    ))
                }
            </div>
            <Modal closeModal={closeModal} isOpened={isOpen} canCloseOutside={canCloseOutside}>
                {modalContent}
            </Modal>
            <S.Layout>
                <GlobalStyles />
                {
                    (userError || boostsError) && (
                        <Error />
                    )
                }
                {
                    (userIsLoading || boostIsLoading) && (
                        <Loader />
                    )
                }
                {
                    canRenderMainPage && (
                        <MainPage />
                    )
                }
            </S.Layout>
        </>
    );
}

export { Layout };

