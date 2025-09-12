import { Description, getFormattedCoins, useBoostsStore } from '@/shared';
import { PassiveBoostModel } from '../../model';
import { BoostWrapper } from '../BoostWrapper';
import * as S from './PassiveBoost.styles';

const PassiveBoost = ({ title, amount, cost, needToUnblock, imagePath, id }: PassiveBoostModel) => {
    const { boosts } = useBoostsStore();

    const level = boosts.find(boost => boost.boost_id === id)?.boost_level || 0;

    return (
        <BoostWrapper
            id={id}
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
