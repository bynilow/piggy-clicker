import { useCoins, useUser } from '@/entities/User';
import { Error, getAmountWithPercent, Loader, Modal, useBoostsStore, useModal, useUserStore } from '@/shared';
import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { MainPage } from '../MainPage';
import * as S from './Layout.styles';
import { useBoosts } from '@/entities/Boost';
import axios from 'axios';
import { API_ENDPOINT } from '@/shared/constants';

const tg = window.Telegram.WebApp;

const GlobalStyles = createGlobalStyle`
    :root {
        --text-primary: #fff;
        --text-secondary: #a0a0a0;
        --bg-secondary: #21222d;
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

    useEffect(() => {
        if (!userData?.id && !userIsLoading) {
            createUser();
        }
    }, [userData])

    useEffect(() => {
        tg.ready();
    }, [])

    useEffect(() => {
        let sendInterval: NodeJS.Timeout | null = null;
        let addInterval: NodeJS.Timeout | null = null;

        const ONE_SECOND = 1000;

        if (boostsData?.length && userData && perSecond && incomeMultiplier) {
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
    }, [boostsData, userData, perSecond, incomeMultiplier])

    const [allUsers, setAllUsers] = useState<{ username: string, coins: number }[]>([]);

    const fetchAllUsers = async () => {
        const { data } = await axios.get(`${API_ENDPOINT}/api/users`);
        setAllUsers(data);
    }

    useEffect(() => {
        fetchAllUsers();
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
                    allUsers.map((user) => (
                        <div>{user?.username} - {user.coins}</div>
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

