import styled from "styled-components";

const Page = styled.div<{ $justifyContent?: 'end' | 'center' | 'start' }>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: ${({ $justifyContent }) => $justifyContent || 'end'};
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 100%;
`;

export { Page };