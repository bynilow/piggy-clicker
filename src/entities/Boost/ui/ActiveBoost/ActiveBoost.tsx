import { Description, getFormattedCoins, useBoostsStore } from '@/shared';
import { ActiveBoostModel, PassiveBoostModel } from '../../model';
import { BoostWrapper } from '../BoostWrapper';
import * as S from './ActiveBoost.styles';

const ActiveBoost = ({ title, amount, cost, needToUnblock, imagePath, id }: ActiveBoostModel) => {
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
                            {getFormattedCoins(amount * level)} / клик
                            <Description>
                                +{getFormattedCoins(amount)}
                            </Description>
                        </S.CurrentPassiveIncome>
                    )
                    : !(needToUnblock && needToUnblock.length > 0) && (
                        <Description>
                            +{getFormattedCoins(amount)} / клик
                        </Description>
                    )
            }
        </BoostWrapper>
    );
}

export { ActiveBoost };
