import * as S from './ActionButton.styles';
import { AnimatePresence, motion } from "motion/react";

interface ActionButtonProps {
    id: string;
    title: string;
    isActive?: boolean;
    iconUrl?: string;
    onClick?(): void;
}

const ActionButton = ({ title, isActive, onClick, iconUrl }: ActionButtonProps) => {
    return (
        <S.ActionButton as={motion.div} transition={{ duration: 0 }} whileTap={{ scale: 0.9 }} $isActive={!!isActive} onClick={onClick}>
            {
                iconUrl && (
                    <S.IconWrapper $isActive={!!isActive} >
                        <S.Icon $isActive={!!isActive} src={iconUrl} />
                    </S.IconWrapper>
                )
            }
            {title}
        </S.ActionButton>
    );
}

export { ActionButton };
export type { ActionButtonProps };
