import { useUser } from '@/entities/User';
import { Error, Loader, Modal, useModal } from '@/shared';
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
    const { boostIsLoading, boostsError } = useBoosts();

    useEffect(() => {
        if (!userData?.id && !userIsLoading) {
            createUser();
        }
    }, [userData])

    useEffect(() => {
        tg.ready();
    }, [])

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
                top: 0,
                left: 0,
                fontSize: 12,
                opacity: 0.5
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

