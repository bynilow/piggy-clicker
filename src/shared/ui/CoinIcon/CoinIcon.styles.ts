import styled from "styled-components";

const Coin = styled.img<{ $isDisabled?: boolean }>`
    height: 1em;
    aspect-ratio: 1/1;
    margin-bottom: 0.1em;
    filter: brightness(${({ $isDisabled }) => $isDisabled ? '50%' : '10)%'});
`;

export { Coin };
