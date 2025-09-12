import styled, { keyframes } from "styled-components";

const Loader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Dots = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
`

const pointAnimation = keyframes`
  0% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-5px);
  }
`;

const Point = styled.span<{ $index: number }>`
    /* animation-delay: ; */
    transform: translateY(5px);
    animation: ${pointAnimation} 1s ease infinite alternate ${({ $index }) => $index * 250}ms;
`

export { Loader, Point, Dots };
