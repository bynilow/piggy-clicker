import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 16px;
`;

const Head = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
    margin-bottom: 16px;
`

const BalanceInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
    width: 100%;
`

const Balance = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 36px;
    color: #ffffff;
`;

const Income = styled.div`
    font-size: 14px;
    color: #a0a0a0;
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr;
    gap: 16px;
    width: 100%;
`;

const IncomeProperty = styled.div`
    border: 1px solid var(--bg-secondary);
    padding: 8px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
`;

const Actions = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1;
    gap: 14px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 100%;
`;

export { Main, Balance, Income, Actions, Head, BalanceInfo, Body, IncomeProperty };
