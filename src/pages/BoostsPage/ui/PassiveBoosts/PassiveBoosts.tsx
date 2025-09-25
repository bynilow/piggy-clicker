import { PassiveBoost, passiveBoostsList } from '@/entities/Boost';
import * as S from '../BoostsPage.styles';

const PassiveBoosts = () => {
  return (
    <S.BoostsList>
      <S.Column>
        {
          passiveBoostsList.filter((_, index) => index % 2 === 0).map(boost => (
            <PassiveBoost
              key={boost.title}
              rare={boost.rare}
              imagePath={boost.imagePath}
              id={boost.id}
              title={boost.title}
              amount={boost.amount}
              cost={boost.cost}
              needToUnblock={boost.needToUnblock}
              createdDate={boost.createdDate} />
          ))
        }
      </S.Column>
      <S.Column>
        {
          passiveBoostsList.filter((_, index) => index % 2 !== 0).map(boost => (
            <PassiveBoost
              key={boost.title}
              rare={boost.rare}
              id={boost.id}
              imagePath={boost.imagePath}
              title={boost.title}
              amount={boost.amount}
              cost={boost.cost}
              needToUnblock={boost.needToUnblock}
              createdDate={boost.createdDate} />
          ))
        }
      </S.Column>
    </S.BoostsList>
  );
}

export { PassiveBoosts };