import { Description, getFormattedCoins } from '@/shared';
import { PassiveBoostModel } from '../../model';
import { BoostWrapper } from '../BoostWrapper';
import * as S from './PassiveBoost.styles';

const PassiveBoost = ({ title, level, amount, cost, needToUnblock, imagePath }: PassiveBoostModel) => {
    return (
        <BoostWrapper
            title={title}
            cost={cost}
            imagePath={imagePath}
            level={level}
            needToUnblock={needToUnblock}>
            {
                level > 0
                    ? (
                        <S.CurrentPassiveIncome>
                            {getFormattedCoins(amount * level)} / сек
                            <Description>
                                +{getFormattedCoins(amount)}
                            </Description>
                        </S.CurrentPassiveIncome>
                    )
                    : !(needToUnblock && needToUnblock.length > 0) && (
                        <Description>
                            +{getFormattedCoins(amount)} / сек
                        </Description>
                    )
            }
        </BoostWrapper>
    );
}

export { PassiveBoost };
