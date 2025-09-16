import styled from "styled-components";

const FriendCell = styled.div<{ $depthFriend: number }>`
    display: flex;
    gap: 16px;
    background-color: #2b2b36;
    padding: 16px;
    border-radius: 16px;
    font-size: 18px;
    margin-left: ${({ $depthFriend }) => $depthFriend * 24}px;
`;

const AvatarWrapper = styled.div<{ $backgroundColor: string }>`
    width: 50px;
    aspect-ratio: 1/1;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    border-radius: 50%;
    text-transform: uppercase;
    color: var(--bg-secondary);
    font-weight: bold;
    overflow: hidden;
`;

const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const IncomeFromFriend = styled.div`
    font-size: 14px;
    color: #a0a0a0;
`;

const FriendInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export { FriendCell, AvatarWrapper, IncomeFromFriend, FriendInfo, Avatar };
