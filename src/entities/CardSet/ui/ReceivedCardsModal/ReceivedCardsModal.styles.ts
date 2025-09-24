import { DEFAULT_ANIMATION_DURATION_MS } from "@/shared/constants";
import styled from "styled-components";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  overflow: scroll;
  max-height: 70vh;
  width: 100%;
`;

const BoostAvatar = styled.img`
  position: relative;
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #a9dfd8;
`;

const Boost = styled.div<{ $rareColor: string }>`
  position: relative;
  background-color: #2b2b36;
  padding: 16px;
  border-radius: 16px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  height: fit-content;

  &::after {
    content: '';
    position: absolute;
    top: -70px;
    left: -70px;
    background-color: ${({ $rareColor }) => $rareColor};
    width: 100px;
    height: 100px;
    rotate: -45deg;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  font-size: 24px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
`

export { List, Boost, BoostAvatar, Column, Buttons, Title, Head };
