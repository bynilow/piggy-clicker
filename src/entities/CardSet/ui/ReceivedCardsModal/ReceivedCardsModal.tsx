import { ActiveBoostModel, activeBoostsList, EmployeeBoostModel, employeeBoostsList, PassiveBoostModel, passiveBoostsList } from '@/entities/Boost';
import { Button, Description, useModal } from '@/shared';
import { RARE_COLORS } from '@/shared/constants';
import { LOCALIZATION } from '../../constants';
import * as S from './ReceivedCardsModal.styles';
import { motion, TargetAndTransition } from 'motion/react';
import { VariantLabels } from 'motion';
import { useState } from 'react';

interface Props {
  boostsIds: string[];
}

const initialAnim: TargetAndTransition | VariantLabels = {
  opacity: 0,
  y: 10
};

const animateAnim: TargetAndTransition | VariantLabels = {
  opacity: 1,
  y: 0,
};

const ReceivedCardsModal = ({ boostsIds }: Props) => {

  const foundedBoosts = boostsIds.map(boostId => {
    return [...activeBoostsList, ...passiveBoostsList, ...employeeBoostsList]
      .find(boostInList => boostInList.id === boostId);
  }).filter(Boolean) as unknown as PassiveBoostModel[] | ActiveBoostModel[] | EmployeeBoostModel[];

  const { closeModal } = useModal();

  const [animationDuration, setAnimationDuration] = useState(0.5);

  const handleSpeedUp = () => {
    setAnimationDuration(0.1);
  }

  return (
    <>
      <S.Head>
        <S.Title>
          {LOCALIZATION.CONGRATULATIONS}
        </S.Title>
        <Description>
          {LOCALIZATION.YOU_GET}
        </Description>
      </S.Head>
      <S.List onClick={handleSpeedUp}>
        <S.Column>
          {
            foundedBoosts.filter((_, index) => index % 2 === 0).map((boost, index) => (
              <S.Boost
                key={boost.id}
                $rareColor={RARE_COLORS[boost.rare]}
                as={motion.div}
                transition={{
                  duration: animationDuration,
                  delay: index + animationDuration
                }}
                initial={initialAnim}
                animate={animateAnim} >
                <S.BoostAvatar src={boost.imagePath} />
                <div>{boost.title}</div>
              </S.Boost>
            ))
          }
        </S.Column>
        <S.Column>
          {
            foundedBoosts.filter((_, index) => index % 2 !== 0).map((boost, index) => (
              <S.Boost
                key={boost.id}
                $rareColor={RARE_COLORS[boost.rare]}
                as={motion.div}
                transition={{
                  duration: animationDuration,
                  delay: index + animationDuration * 2
                }}
                initial={initialAnim}
                animate={animateAnim} >
                <S.BoostAvatar src={boost.imagePath} />
                <div>{boost.title}</div>
              </S.Boost>
            ))
          }
        </S.Column>
      </S.List>
      <Button variant='secondary' size='S' onClick={closeModal}>
        {LOCALIZATION.CLOSE}
      </Button>
    </>
  );
}

export { ReceivedCardsModal };
