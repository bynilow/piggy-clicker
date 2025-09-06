import { Description, getFormattedCoins } from '@/shared';
import { ActiveBoostModel, EmployeeBoostModel, PassiveBoostModel } from '../../model';
import { BoostWrapper } from '../BoostWrapper';
import * as S from './EmployeeBoost.styles';

const EmployeeBoost = ({ title, level, amount, cost, needToUnblock, imagePath }: EmployeeBoostModel) => {
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
