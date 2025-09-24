import { CoinIcon, Divider, getAmountWithPercent, getFormattedCoins, useBoostsStore, useModal, useUserStore } from '@/shared';
import * as S from './CardSet.styles';
import { CARD_SET_TIME_FOR_COST_SECONDS } from '../constants';
import { motion } from 'motion/react';
import { ObtainedCardsModal } from './ObtainedCardsModal';
import { CardsSetsModel } from '../model';

const CardSet = ({ imagePath, title, costMultiplier, boosts }: CardsSetsModel) => {
  const { coins } = useUserStore();
  const { perSecond, incomeMultiplier } = useBoostsStore();
  const cost = getAmountWithPercent(perSecond, incomeMultiplier) * CARD_SET_TIME_FOR_COST_SECONDS * costMultiplier;
  const canBuy = coins >= cost;

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

        {getFormattedCoins(cost)}
        <CoinIcon />

      </S.SetCost>
    </S.CardSet>
  );
}

export { CardSet };
