import { useMemo } from 'react';
import * as S from './ReferralCell.styles'
import { LOCALIZATION } from '../constants';

interface Props {
    avatarUrl?: string;
    username: string;
    incomePerSecond: number;
}

const AvatarWrapperPossibleColors = [
    '#a9dfd8', '#add8e6', '#abcdef', '#afdafc', '#dcd0ff', '#e6a8d7', '#cda4de', '#e0b0ff',
];

const ReferralCell = ({ avatarUrl, username, incomePerSecond }: Props) => {

    const selectedColor = useMemo(() => AvatarWrapperPossibleColors[
        Math.floor(Math.random() * AvatarWrapperPossibleColors.length)
    ], [username]);

    return (
        <S.FriendCell $depthFriend={0}>
            <S.AvatarWrapper
                $backgroundColor={selectedColor}>
                {
                    avatarUrl
                        ? <S.Avatar src={avatarUrl} />
                        : username.charAt(0)
                }
            </S.AvatarWrapper>
            <S.FriendInfo>
                <div>
                    {username}
                </div>
                <S.IncomeFromFriend>
                    {LOCALIZATION.MAKING_YOU_MONEY}: +{incomePerSecond} / сек
                </S.IncomeFromFriend>
            </S.FriendInfo>
        </S.FriendCell>
    );
}

export { ReferralCell }