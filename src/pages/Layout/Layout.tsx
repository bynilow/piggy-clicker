import { Modal, ModalProvider, useModal } from '@/shared';
import { MainPage } from '../MainPage';
import * as S from './Layout.styles';
import { createGlobalStyle } from 'styled-components';
import { createContext, useState } from 'react';

const GlobalStyles = createGlobalStyle`
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
        user-select: none;
    }
`

const Layout = () => {

    const { isOpen, closeModal, modalContent } = useModal();

    return (
        <>
            <Modal isOpened={isOpen} onClose={closeModal}>
                {modalContent}
            </Modal>
            <S.Layout>
                <GlobalStyles />
                <MainPage />
            </S.Layout>
        </>
    );
}

export { Layout };
