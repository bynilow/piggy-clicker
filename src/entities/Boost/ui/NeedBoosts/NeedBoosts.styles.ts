import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Boost = styled.div<{ $haveBoost: boolean }>`
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 16px;
    color: ${({ $haveBoost }) => $haveBoost ? '#fff' : '#a0a0a0'};
`;

const Title = styled.div`
    font-size: 18px;
`;

const Level = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export { Wrapper, Boost, Title, Level };