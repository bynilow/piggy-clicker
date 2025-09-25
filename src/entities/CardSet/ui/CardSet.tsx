import { Divider, getAmountWithPercent, useBoostsStore, useModal, useUserStore } from '@/shared';
import { motion } from 'motion/react';
import { BASE_COST_BOOST_SET, CARD_SET_TIME_FOR_COST_SECONDS, LOCALIZATION, UPGRADES_TO_OPEN_SETS } from '../constants';
import { CardsSetsModel } from '../model';
import * as S from './CardSet.styles';
import { ObtainedCardsModal } from './ObtainedCardsModal';

const CardSet = ({ imagePath, title, costMultiplier, boosts }: CardsSetsModel) => {
  const { coins } = useUserStore();
  const { boosts: boostsStore, perSecond, incomeMultiplier } = useBoostsStore();

  const foundedBoosts = boostsStore.filter(boost => boosts.includes(boost.boost_id));

  const haveCountForBuy = foundedBoosts.length >= UPGRADES_TO_OPEN_SETS;

  const cost = BASE_COST_BOOST_SET + getAmountWithPercent(perSecond, incomeMultiplier) * CARD_SET_TIME_FOR_COST_SECONDS * costMultiplier;
  const canBuy = coins >= cost && haveCountForBuy;

  const { openModal } = useModal();

  const handleClickSet = () => {
    openModal(<ObtainedCardsModal cost={cost} canBuy={canBuy} boostsIds={boosts} />, false);
  }

  return (
    <S.CardSet
      onClick={handleClickSet}
      as={motion.div}
      transition={{ duration: 0.3 }}
      whileTap={canBuy ? { scale: 0.9 } : {}}>
      <S.Head>
        <S.Avatar src={imagePath} />
        <S.Title>
          {title}
        </S.Title>
      </S.Head>
      <Divider isLight />
      <S.SetCost $canBuy={canBuy}>
        {LOCALIZATION.SHOW}
        {/* {getFormattedCoins(cost)}
        <CoinIcon /> */}
      </S.SetCost>
    </S.CardSet>
  );
}

export { CardSet };

