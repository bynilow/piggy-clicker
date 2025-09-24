import { motion } from 'motion/react';
import * as S from './Button.styles';

interface Props {
  disabled?: boolean;
  onClick(event?: React.MouseEvent<HTMLButtonElement>): void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'S' | 'M';
}

const Button = ({ children, onClick, disabled, variant = 'primary', size = 'M' }: Props) => {

  return {
    primary: (
      <S.PrimaryButton
        as={motion.button}
        transition={{ duration: 0 }}
        whileTap={{ scale: 0.90 }}
        disabled={disabled}
        $size={size}
        onClick={onClick}>
        {children}
      </S.PrimaryButton>
    ),
    secondary: (
      <S.SecondaryButton
        as={motion.button}
        transition={{ duration: 0 }}
        whileTap={{ scale: 0.90 }}
        disabled={disabled}
        $size={size}
        onClick={onClick}>
        {children}
      </S.SecondaryButton>
    )
  }[variant];
}

export { Button };