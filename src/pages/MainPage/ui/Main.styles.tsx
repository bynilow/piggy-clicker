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
`

const Balance = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 36px;
    color: #ffffff;
`;

const AutomaticIncome = styled.div`
    font-size: 14px;
    color: #a0a0a0;
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

export { Main, Balance, AutomaticIncome, Actions, Head, BalanceInfo, Body };
