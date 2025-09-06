import styled from "styled-components";

const ActionButton = styled.div<{ $isActive: boolean }>`
    position: relative;
    background-color: ${({ $isActive }) => $isActive ? '#a9dfd8' : '#21222d'};
    color: ${({ $isActive }) => $isActive ? '#000' : '#a0a0a0'};
    /* height: 50px; */
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: end;
    align-items: center;
    border-radius: 16px;
    padding: 8px;
    font-size: 12px;
    transition: ease 0.3s;
`;

const IconWrapper = styled.div<{ $isActive: boolean }>`
    /* position: absolute; */
    aspect-ratio: 1/1;
    height: 30px;
    /* border-radius: 50px; */
    /* padding: 8px; */
`

const Icon = styled.img<{ $isActive: boolean }>`
    opacity: ${({ $isActive }) => $isActive ? '1' : '0.56'};
    width: 100%;
    height: 100%;
    filter: ${({ $isActive }) => $isActive ? 'invert(0%)' : 'invert(100%)'};
`;

export { IconWrapper, ActionButton, Icon };
