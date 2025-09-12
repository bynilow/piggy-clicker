import { createContext, useState } from "react";

interface ModalContextType {
    isOpen: boolean;
    openModal(content: React.ReactNode | null, canCloseOutside?: boolean): void;
    canCloseOutside?: boolean;
    closeModal(): void;
    modalContent: React.ReactNode | null;
};

const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpened] = useState(false);
    const [canCloseOutside, setCanCloseOutside] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

    const openModal = (content: React.ReactNode | null, canCloseOutside?: boolean) => {
        setIsOpened(true);
        setModalContent(content);
        setCanCloseOutside(!!canCloseOutside);
    }

    const closeModal = () => {
        setIsOpened(false);
    }

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalContent, canCloseOutside }}>
            {children}
        </ModalContext.Provider>
    )
};

export { ModalContext, ModalProvider };
