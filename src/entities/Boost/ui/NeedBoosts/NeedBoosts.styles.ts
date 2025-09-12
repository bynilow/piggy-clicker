import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 50vw;
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
    color: var(--text-primary);
`;

const CurrentLevel = styled.span`
    color: var(--text-secondary);
`

export { Wrapper, Boost, Title, Level, CurrentLevel };