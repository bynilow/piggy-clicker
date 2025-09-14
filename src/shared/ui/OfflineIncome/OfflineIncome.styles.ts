import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const Title = styled.div`
    font-size: 18px;
    text-transform: uppercase;
`;

const TotalIncomeWrapper = styled.div`
    background-color: var(--accent-color);
    padding: 16px;
    border-radius: 16px;
    color: var(--bg-secondary);
    min-width: 50vw;
    display: flex;
    flex-direction: column;
`;

const TotalIncomeTitle = styled.div`
    font-size: 18px;
`

const Earned = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 64px;
`;

const TimeGone = styled.div`
    font-size: 18px;
    color: var(--text-secondary);
`

export { Wrapper, Title, TotalIncomeWrapper, TotalIncomeTitle, Earned, TimeGone };
