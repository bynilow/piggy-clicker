import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 100%;
`;

const FriendList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

const FriendCell = styled.div<{ $depthFriend: number }>`
    display: flex;
    gap: 16px;
    background-color: #2b2b36;
    padding: 16px;
    border-radius: 16px;
    font-size: 18px;
    margin-left: ${({ $depthFriend }) => $depthFriend * 24}px;
`;

const FriendAvatar = styled.div`
    width: 50px;
    aspect-ratio: 1/1;
    background-color: #a9dfd8;
`;

const IncomeFromFriend = styled.div`
    font-size: 14px;
    color: #a0a0a0;
`;

const FriendInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const EmptyReferrals = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    font-size: 14px;
    color: #a0a0a0;
`;

const InviteUrl = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 24px;
    color: #fff;
    background-color: #21222d;
    padding: 16px;
    border-radius: 16px;
`;

const CopyIcon = styled.img`
    height: 18px;
    aspect-ratio: 1/1;
    filter: invert(100%);
`

export { CopyIcon, InviteUrl, EmptyReferrals, Page, FriendInfo, IncomeFromFriend, FriendAvatar, FriendList, FriendCell }