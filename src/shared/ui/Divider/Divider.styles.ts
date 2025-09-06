import styled from "styled-components";

const Divider = styled.div<{ $isLight?: boolean }>`
    height: 1px;
    background-color: ${({ $isLight }) => $isLight ? '#a0a0a0' : '#2b2b36'};
    width: 100%;
`;

export { Divider };
