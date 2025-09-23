import styled from "styled-components";

const Username = styled.div`
  font-size: 18px;
  text-overflow: ellipsis;
`;

const Statistic = styled.div`
  color: var(--text-secondary);
`

const Avatar = styled.img`
  background-color: var(--accent-color);
  width: 50px;
  border-radius: 50%;
  aspect-ratio: 1/1;
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Leader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  background-color: var(--bg-secondary);
  padding: 16px;
  border-radius: 16px;
  width: 100%;
`;

const Head = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Place = styled.div<{ $placeColor?: string }>`
  color: var(--text-secondary);
  color: ${({ $placeColor }) => $placeColor};
`;

export { Head, Username, Avatar, Leader, List, Statistic, Statistics, Place }