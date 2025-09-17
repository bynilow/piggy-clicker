import { DEFAULT_ANIMATION_DURATION_MS } from "@/shared/constants";
import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
`;

const Title = styled.div`
    font-size: 24px;
`;

const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-radius: 16px;
    font-size: 18px;
    background-color: var(--bg-secondary);
    width: 100%;
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 0;
    width: 30px;
    height: 30px;
    transition: ${DEFAULT_ANIMATION_DURATION_MS}ms;
`;

const Icon = styled.img<{ $isColorInvert?: boolean }>`
    width: 100%;
    height: 100%;
    filter: ${({ $isColorInvert }) => $isColorInvert ? 'invert(100%)' : ''};
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;

    &:focus-within {
        & > ${IconWrapper} {
            transform: scale(0);
            opacity: 0;
        }
    }
`;

const Input = styled.input`
    position: relative;
    padding: 16px;
    padding-left: calc(30px + 16px);
    outline: none;
    border: none;
    border-bottom: 1px solid var(--text-secondary);
    background-color: transparent;
    color: var(--text-primary);
    font-size: 24px;
    width: 100%;
    transition: ease ${DEFAULT_ANIMATION_DURATION_MS}ms;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    &[type='number'] {
        -moz-appearance: textfield;
    }

    &:focus{
        padding-left: 16px;
        border: none;
        outline: 1px solid var(--accent-color);
        border-radius: 16px;
        color: var(--accent-color);
        box-shadow: 0px 0px 10px 2px rgba(169, 223, 216, 0.3);
    }
`;

const ButtonSend = styled.button`
    padding: 16px;
    border: none;
    background-color: var(--accent-color);
    border-radius: 16px;
    font-size: 18px;
    width: 100%;
    cursor: pointer;
    transition: ${DEFAULT_ANIMATION_DURATION_MS}ms;

    &:disabled {
        background-color: var(--bg-secondary);
        color: var(--text-secondary);
    }
`;

export { Page, InputContent, Input, Title, InputWrapper, IconWrapper, Icon, ButtonSend, Form };
