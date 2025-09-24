import { activeBoostsList, employeeBoostsList, passiveBoostsList } from '@/entities/Boost';
import * as S from './ObtainedCardsModal.styles';
import { ActionButton, Button, CoinIcon, Description, getFormattedCoins, useBoostsStore, useModal } from '@/shared';
import { RARE_COLORS, RARE_PRIORITY } from '@/shared/constants';
import { motion } from 'motion/react';
import { LOCALIZATION, UPGRADES_TO_OPEN_SETS } from '../../constants';
import { useBoostSet } from '../../model/useBoostSet';

interface Props {
  boostsIds: string[];
  canBuy: boolean;
  cost: number;
}

const ObtainedCardsModal = ({ boostsIds, canBuy, cost }: Props) => {
  const { boosts } = useBoostsStore();

  const foundedBoosts = [...activeBoostsList, ...passiveBoostsList, ...employeeBoostsList]
    .filter(boost => boostsIds.includes(boost.id))
    .map(boost => ({ ...boost, haveUser: boosts.find(userBoost => userBoost.boost_id === boost.id) }))
    .sort((prevBoost, nextBoost) => RARE_PRIORITY[prevBoost.rare] - RARE_PRIORITY[nextBoost.rare])
    .sort((prevBoost, nextBoost) => Number(Boolean(nextBoost.haveUser)) - Number(Boolean(prevBoost.haveUser)));

  const { closeModal } = useModal();

  const { buyBoostSet, boostSetIsPending } = useBoostSet();

  const handleBuySet = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    buyBoostSet({
      cost,
      boosts: foundedBoosts.filter(boost => boost.haveUser).map(boost => ({ boost_id: boost.id, boost_rare: boost.rare }))
    })
  };

  return (
    <>
      <Description>
        {LOCALIZATION.BOOST_YOU_ALREADY_HAVE}
      </Description>
      <S.List>
        <S.Column>
          {
            foundedBoosts.filter((_, index) => index % 2 === 0).map(boost => (
              <S.Boost key={boost.id} $rareColor={RARE_COLORS[boost.rare]} $haveUser={Boolean(boost.haveUser)}>
                <S.BoostAvatar src={boost.imagePath} />
                <div>{boost.title}</div>
              </S.Boost>
            ))
          }
        </S.Column>
        <S.Column>
          {
            foundedBoosts.filter((_, index) => index % 2 !== 0).map(boost => (
              <S.Boost key={boost.id} $rareColor={RARE_COLORS[boost.rare]} $haveUser={Boolean(boost.haveUser)}>
                <S.BoostAvatar src={boost.imagePath} />
                <div>{boost.title}</div>
              </S.Boost>
            ))
          }
        </S.Column>
      </S.List>
      <S.Buttons>
        <Button disabled={!canBuy || boosts.length < UPGRADES_TO_OPEN_SETS || boostSetIsPending} size='S' onClick={handleBuySet}>
          {
            boosts.length >= UPGRADES_TO_OPEN_SETS
              ? <>{getFormattedCoins(cost)} <CoinIcon /></>
              : `${LOCALIZATION.REQUIRED}: ${UPGRADES_TO_OPEN_SETS} ${LOCALIZATION.TYPES_UPGRADES}`
          }
        </Button>
        <Button variant='secondary' size='S' onClick={closeModal} disabled={boostSetIsPending}>
          {LOCALIZATION.CLOSE}
        </Button>
      </S.Buttons>
    </>
  );
}

export { ObtainedCardsModal };