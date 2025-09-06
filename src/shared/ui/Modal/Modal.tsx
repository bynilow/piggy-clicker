import { AnimatePresence, motion, TargetAndTransition } from 'motion/react';
import * as S from './Modal.styles'
import { VariantLabels } from 'motion';

interface Props {
    isOpened: boolean;
    onClose(): void;
    children: React.ReactNode;
}

const initialStyles: TargetAndTransition | VariantLabels = {
    opacity: 0,
    translateY: 30
};

const targetStyles: TargetAndTransition | VariantLabels = {
    opacity: 1,
    translateY: 0
};

const Modal = ({ isOpened, onClose, children }: Props) => {
    return (
        <AnimatePresence>
            {
                isOpened && (
                    <S.Modal as={motion.div} transition={{ bounce: 0 }} initial={initialStyles} animate={targetStyles} exit={initialStyles} onClick={onClose}>
                        <S.Content>
                            {children}
                        </S.Content>
                    </S.Modal>
                )
            }
        </AnimatePresence>
    );
}

export { Modal };
