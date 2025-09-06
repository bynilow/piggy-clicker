import { Description, getFormattedCoins } from '@/shared';
import { ActiveBoostModel, PassiveBoostModel } from '../../model';
import { BoostWrapper } from '../BoostWrapper';
import * as S from './ActiveBoost.styles';

const ActiveBoost = ({ title, level, amount, cost, needToUnblock, imagePath }: ActiveBoostModel) => {
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
