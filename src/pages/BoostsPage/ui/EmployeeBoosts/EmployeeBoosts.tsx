import { EmployeeBoost, employeeBoostsList } from '@/entities/Boost';
import * as S from '../BoostsPage.styles';

const EmployeeBoosts = () => {
  return (
    <S.BoostsList>
      <S.Column>
        {
          employeeBoostsList.filter((_, index) => index % 2 === 0).map(boost => (
            <EmployeeBoost
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
          employeeBoostsList.filter((_, index) => index % 2 !== 0).map(boost => (
            <EmployeeBoost
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

export { EmployeeBoosts };