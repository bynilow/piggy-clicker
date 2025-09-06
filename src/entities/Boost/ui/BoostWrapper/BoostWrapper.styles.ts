import styled from "styled-components";

const Boost = styled.div`
    position: relative;
    background-color: #2b2b36;
    padding: 16px;
    border-radius: 16px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    overflow: hidden;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const BoostAvatar = styled.img<{ $isDisabled: boolean }>`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: #a9dfd8;
    filter: brightness(${({ $isDisabled }) => $isDisabled ? '60%' : '100%'});
`;

const BuyInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    width: 100%;
`

const BoostUpgrades = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const BoostCost = styled.div<{ $canBuy: boolean }>`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({ $canBuy }) => $canBuy ? '#fff' : '#a0a0a0'};
    font-weight: bold;
    font-size: 18px;
`;

const Level = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px;
    font-size: 14px;
    color: #a0a0a0;
`;

const LockWrapper = styled.div`
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 50%;
    aspect-ratio: 1/1;
`;

const LockIcon = styled.img`
    width: 100%;
    height: 100%;
    filter: invert(100%);
`;

const AvatarWrapper = styled.div`
    position: relative;
`;

const Question = styled.div`
    background-color: #a9dfd8;
    color: #000;
    font-weight: bold;
    padding: 16px;
    border-radius: 16px;
    line-height: 0;
`;

const CurrentPassiveIncome = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4px;
`;

const Title = styled.div`
    font-size: 16px;
    line-height: 0.9;
`

export { Title, CurrentPassiveIncome, Question, LockWrapper, AvatarWrapper, LockIcon, Level, InfoWrapper, Boost, Info, BoostAvatar, BuyInfo, BoostUpgrades, BoostCost };
