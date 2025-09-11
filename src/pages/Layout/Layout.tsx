import { useUser } from '@/entities/User';
import { Error, Loader, Modal, useModal, useUserStore } from '@/shared';
import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { MainPage } from '../MainPage';
import * as S from './Layout.styles';

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

    const { isOpen, closeModal, modalContent } = useModal();

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    const userId = tg?.initDataUnsafe?.user?.id || 1337;
    const userName = tg?.initDataUnsafe?.user?.username || 'test_user';

    const { userData, userError, userIsLoading, createUser } = useUser(userId, userName);

    useEffect(() => {
        if (!userData?.id && !userIsLoading) {
            createUser();
        }
    }, [userData])

    useEffect(() => {
        tg.ready();
    }, [])

    const canRenderMainPage = userData?.id && !userError && !userIsLoading;

    return (
        <>
            <Modal isOpened={isOpen} onClose={closeModal}>
                {modalContent}
            </Modal>
            <S.Layout>
                <GlobalStyles />
                {
                    userError && (
                        <Error />
                    )
                }
                {
                    userIsLoading && (
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

