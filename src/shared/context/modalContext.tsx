import { createContext, useState } from "react";

interface ModalContextType {
    isOpen: boolean;
    openModal(content: React.ReactNode | null): void;
    closeModal(): void;
    modalContent: React.ReactNode | null;
};

const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpened] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

    const openModal = (content: React.ReactNode | null) => {
        setIsOpened(true);
        setModalContent(content);
    }

    const closeModal = () => {
        setIsOpened(false);
    }

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalContent }}>
            {children}
        </ModalContext.Provider>
    )
};

export { ModalContext, ModalProvider };
