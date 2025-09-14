import { LOCALIZATION, MAX_OFFLINE_TIME_IN_HOURS } from '@/shared/constants';
import { getFormattedCoins } from '@/shared/lib';
import { CoinIcon } from '../CoinIcon';
import * as S from './OfflineIncome.styles';

interface Props {
    earnedCoins: number;
    timeGoneInSeconds: number;
}

const OfflineIncome = ({ earnedCoins, timeGoneInSeconds }: Props) => {
    const hours = timeGoneInSeconds / 3600;
    const minutes = hours < 1 ? ((timeGoneInSeconds % 3600) / 60).toFixed(1) : 0;

    return (
        <S.Wrapper>
            <S.Title>
                {LOCALIZATION.WHILE_YOU_WERE_AWAY}
            </S.Title>
            <S.TotalIncomeWrapper>
                <S.TotalIncomeTitle>
                    {LOCALIZATION.YOU_EARNED}
                </S.TotalIncomeTitle>
                <S.Earned>
                    {getFormattedCoins(earnedCoins)} <CoinIcon />
                </S.Earned>
            </S.TotalIncomeWrapper>
            <S.TimeGone>
                {hours >= 1 ? `${hours.toFixed(1)}ч` : `${minutes}мин`} / {MAX_OFFLINE_TIME_IN_HOURS}ч
            </S.TimeGone>
        </S.Wrapper>
    );
}

export { OfflineIncome };

