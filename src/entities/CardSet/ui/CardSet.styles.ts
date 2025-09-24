import styled from "styled-components";

const CardSet = styled.div`
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
`;

const Avatar = styled.img`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #a9dfd8;
`;

const Title = styled.div`

`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SetCost = styled.div<{ $canBuy: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ $canBuy }) => $canBuy ? '#fff' : '#a0a0a0'};
  font-weight: bold;
  font-size: 18px;
`;

export { CardSet, Avatar, Title, Head, SetCost };
