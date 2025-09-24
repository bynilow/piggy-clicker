import { CardSet, cardsSetsList } from '@/entities/CardSet';
import * as S from '../BoostsPage.styles';

const CardSets = () => {
  return (
    <S.BoostsList>
      <S.Column>
        {
          cardsSetsList.filter((_, index) => index % 2 === 0).map(cardSet => (
            <CardSet
              id={cardSet.id}
              boosts={cardSet.boosts}
              imagePath={cardSet.imagePath || ''}
              title={cardSet.title}
              costMultiplier={cardSet.costMultiplier} />
          ))
        }
      </S.Column>
      <S.Column>
        {
          cardsSetsList.filter((_, index) => index % 2 !== 0).map(cardSet => (
            <CardSet
              id={cardSet.id}
              boosts={cardSet.boosts}
              imagePath={cardSet.imagePath || ''}
              title={cardSet.title}
              costMultiplier={cardSet.costMultiplier} />
          ))
        }
      </S.Column>
    </S.BoostsList>
  );
}

export { CardSets };