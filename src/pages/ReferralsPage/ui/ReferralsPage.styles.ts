import styled from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const FriendList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    height: 100%;
    overflow: scroll;
`;

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

const SendIcon = styled.img`
    height: 24px;
    aspect-ratio: 1/1;
    filter: invert(100%);
`

export { SendIcon, InviteUrl, EmptyReferrals, FriendList, Content };
