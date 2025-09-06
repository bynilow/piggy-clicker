import { CoinIcon, Divider, getFormattedCoins, useModal } from '@/shared';
import { BASE_COST_MULTIPLIER } from '@/shared/constants';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { lockIconUrl } from '../../assets';
import * as S from './BoostWrapper.styles';
import { getBoostNameById } from '../../lib';
import { NeedBoosts } from '../NeedBoosts';
import { NeedToUnblock } from '../../model';

interface Props {
    title: string;
    level: number;
    cost: number;
    needToUnblock?: NeedToUnblock[];
    imagePath?: string;
    children: React.ReactNode;
}

const BoostWrapper = ({ title, level, cost, needToUnblock, imagePath, children }: Props) => {
    const { openModal } = useModal();

    const totalCost = useMemo(() => level === 0 ? cost : level * BASE_COST_MULTIPLIER * cost, [level, cost])

    const handleClickBoost = () => {
        if (needToUnblock && needToUnblock.length > 0) {
            openModal(<NeedBoosts needBoosts={needToUnblock} />);
        }
    }

    return (
        <S.Boost onClick={handleClickBoost} as={motion.div} transition={{ duration: 0.3 }} whileTap={true ? { scale: 0.9 } : {}}>
            <S.InfoWrapper>
                <S.AvatarWrapper>
                    <S.BoostAvatar src={imagePath} $isDisabled={!!(needToUnblock && needToUnblock.length > 0)} />
                    {
                        needToUnblock && needToUnblock.length > 0 && (
                            <S.LockWrapper>
                                <S.LockIcon src={lockIconUrl} />
                            </S.LockWrapper>
                        )
                    }
                </S.AvatarWrapper>
                <S.Info>
                    <S.Title>
                        {title}
                    </S.Title>
                    {
                        children
                    }
                </S.Info>
            </S.InfoWrapper>
            {
                level > 0 && (
                    <S.Level>
                        x{level}
                    </S.Level>
                )
            }

            <S.BuyInfo>
                <Divider isLight />
                {
                    needToUnblock && needToUnblock.length > 0
                        ? <S.Question>?</S.Question>
                        : (
                            <S.BoostCost $canBuy={true}>

                                {getFormattedCoins(totalCost)}
                                <CoinIcon isDisabled={!true} />

                            </S.BoostCost>
                        )
                }
            </S.BuyInfo>
        </S.Boost>
    );
}

export { BoostWrapper };
