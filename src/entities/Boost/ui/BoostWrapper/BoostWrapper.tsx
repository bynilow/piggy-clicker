import { CoinIcon, Divider, getFormattedCoins, LoaderModal, useBoostsStore, useModal, useUserStore } from '@/shared';
import { BASE_COST_MULTIPLIER } from '@/shared/constants';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { lockIconUrl } from '../../assets';
import * as S from './BoostWrapper.styles';
import { getBoostNameById } from '../../lib';
import { NeedBoosts } from '../NeedBoosts';
import { NeedToUnblock } from '../../model';
import { useBoosts } from '../../model/useBoosts';
import { useUser } from '@/entities/User';

interface Props {
    id: string;
    title: string;
    level: number;
    cost: number;
    needToUnblock?: NeedToUnblock[];
    imagePath?: string;
    children: React.ReactNode;
}

const BoostWrapper = ({ title, level, cost, needToUnblock, imagePath, children, id }: Props) => {
    const { openModal } = useModal();

    const totalCost = useMemo(() => level === 0 ? cost : level * BASE_COST_MULTIPLIER * cost, [level, cost])

    const { buyBoost } = useBoosts();
    const { coins } = useUserStore();
    const { boosts } = useBoostsStore();

    const canBuy = coins >= totalCost;

    const haveAllBoosts = needToUnblock?.every(neededBoost => {
        const foundedBoost = boosts.find(userBoost => userBoost.boost_id === neededBoost.id);

        if (!foundedBoost) return false;

        return foundedBoost.boost_level >= neededBoost.level
    }) || false;


    const isNeedToUnblock = needToUnblock && needToUnblock.length > 0 && !haveAllBoosts;

    const handleClickBoost = () => {
        if (isNeedToUnblock) {
            openModal(<NeedBoosts needBoosts={needToUnblock} />, true);
        } else if (canBuy) {
            buyBoost({ boostId: id, boostCost: totalCost });
        }
    };

    return (
        <>
            <S.Boost onClick={handleClickBoost} as={motion.div} transition={{ duration: 0.3 }} whileTap={canBuy || isNeedToUnblock ? { scale: 0.9 } : {}}>
                <S.InfoWrapper>
                    <S.AvatarWrapper>
                        <S.BoostAvatar src={imagePath} $isDisabled={!!(isNeedToUnblock)} />
                        {
                            isNeedToUnblock && (
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
                        isNeedToUnblock
                            ? <S.Question>?</S.Question>
                            : (
                                <S.BoostCost $canBuy={canBuy}>

                                    {getFormattedCoins(totalCost)}
                                    <CoinIcon isDisabled={!true} />

                                </S.BoostCost>
                            )
                    }
                </S.BuyInfo>
            </S.Boost>
        </>
    );
}

export { BoostWrapper };
