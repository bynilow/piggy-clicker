import styled from "styled-components";


const History = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Date = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const HistoryItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background-color: var(--bg-secondary);
    padding: 16px;
    border-radius: 16px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--accent-color);
`;

const UserInfo = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

const Username = styled.div`
    font-size: 16px;
    word-break: break-all;
`

const Amount = styled.div<{ $isUserSender: boolean }>`
    font-size: 18px;
    font-weight: bold;
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${({ $isUserSender }) => $isUserSender ? 'var(--red-color)' : 'var(--green-color)'};
`;

const AmountAndTime = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    white-space: nowrap;
`

const Time = styled.div`
    color: var(--text-secondary);
    font-weight: 300;
`;

const DateTitle = styled.div`
    color: var(--text-secondary);
`

export { History, Date, HistoryItem, Username, Amount, AmountAndTime, Time, DateTitle, Avatar, UserInfo };
