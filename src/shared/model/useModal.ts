import { useContext, useState } from "react";
import { ModalContext } from "../context";

const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('Modal Context not received');
    }

    return context;
}

export { useModal }