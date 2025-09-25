import { ActiveBoost, activeBoostsList } from '@/entities/Boost';
import * as S from '../BoostsPage.styles';



const ActiveBoosts = () => {
  return (
    <S.BoostsList>
      <S.Column>
        {
          activeBoostsList.filter((_, index) => index % 2 === 0).map(boost => (
            <ActiveBoost
              key={boost.title}
              rare={boost.rare}
              imagePath={boost.imagePath}
              id={boost.id}
              title={boost.title}
              type={boost.type}
              amount={boost.amount}
              cost={boost.cost}
              needToUnblock={boost.needToUnblock}
              createdDate={boost.createdDate} />
          ))
        }
      </S.Column>
      <S.Column>
        {
          activeBoostsList.filter((_, index) => index % 2 !== 0).map(boost => (
            <ActiveBoost
              key={boost.title}
              rare={boost.rare}
              id={boost.id}
              imagePath={boost.imagePath}
              title={boost.title}
              type={boost.type}
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

export { ActiveBoosts };