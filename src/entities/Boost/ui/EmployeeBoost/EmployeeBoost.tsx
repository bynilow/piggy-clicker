import { Description, getFormattedCoins, useBoostsStore } from '@/shared';
import { ActiveBoostModel, EmployeeBoostModel, PassiveBoostModel } from '../../model';
import { BoostWrapper } from '../BoostWrapper';
import * as S from './EmployeeBoost.styles';

const EmployeeBoost = ({ title, amount, cost, needToUnblock, imagePath, id }: EmployeeBoostModel) => {
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
                            +{getFormattedCoins(amount * level)}% дохода
                            <Description>
                                +{getFormattedCoins(amount)}%
                            </Description>
                        </S.CurrentPassiveIncome>
                    )
                    : !(needToUnblock && needToUnblock.length > 0) && (
                        <Description>
                            +{getFormattedCoins(amount)}% дохода
                        </Description>
                    )
            }
        </BoostWrapper>
    );
}

export { EmployeeBoost };
