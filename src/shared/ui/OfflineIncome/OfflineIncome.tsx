import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import * as S from './OfflineIncome.styles';
import { LOCALIZATION } from '@/shared/constants';
import { getFormattedCoins } from '@/shared/lib';
import { Divider } from '../Divider';
import { CoinIcon } from '../CoinIcon';

interface Props {
    earnedCoins: number;
}

const OfflineIncome = ({ earnedCoins }: Props) => {
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
        </S.Wrapper>
    );
}

export { OfflineIncome };
