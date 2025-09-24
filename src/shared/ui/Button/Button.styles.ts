import { DEFAULT_ANIMATION_DURATION_MS } from "@/shared/constants";
import styled from "styled-components";

const PrimaryButton = styled.button<{ $size: 'S' | 'M' }>`
    padding: ${({ $size }) => $size === 'M' ? '18px' : '12px'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    background-color: var(--accent-color);
    border-radius: 16px;
    font-size: 18px;
    width: 100%;
    cursor: pointer;
    transition: ${DEFAULT_ANIMATION_DURATION_MS}ms;
    -webkit-tap-highlight-color: transparent;
    
    &:disabled {
        background-color: var(--bg-secondary);
        color: var(--text-secondary);
    }
`;

const SecondaryButton = styled(PrimaryButton)`
    background-color: var(--bg-secondary);
    color: var(--text-primary);
`;

export { PrimaryButton, SecondaryButton };
