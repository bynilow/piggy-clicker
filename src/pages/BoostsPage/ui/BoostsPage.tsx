import { activeBoostsList, PassiveBoost, passiveBoostsList, ActiveBoost, employeeBoostsList, EmployeeBoost } from '@/entities/Boost';
import { ActionButton } from '@/shared';
import { ReactElement, useState } from 'react';
import { BOOSTS_PAGE_ACTIONS } from '../constant';
import { BoostActionName } from '../model';
import * as S from './BoostsPage.styles';

const PassiveBoosts = (
    <>
        <S.Column>
            {
                passiveBoostsList.filter((_, index) => index % 2 === 0).map(boost => (
                    <PassiveBoost
                        key={boost.title}
                        imagePath={boost.imagePath}
                        id=''
                        title={boost.title}
                        level={boost.level}
                        amount={boost.amount}
                        cost={boost.cost}
                        needToUnblock={boost.needToUnblock} />
                ))
            }
        </S.Column>
        <S.Column>
            {
                passiveBoostsList.filter((_, index) => index % 2 !== 0).map(boost => (
                    <PassiveBoost
                        key={boost.title}
                        id=''
                        imagePath={boost.imagePath}
                        title={boost.title}
                        level={boost.level}
                        amount={boost.amount}
                        cost={boost.cost}
                        needToUnblock={boost.needToUnblock} />
                ))
            }
        </S.Column>
    </>
);

const ActiveBoosts = (
    <>
        <S.Column>
            {
                activeBoostsList.filter((_, index) => index % 2 === 0).map(boost => (
                    <ActiveBoost
                        key={boost.title}
                        imagePath={boost.imagePath}
                        id=''
                        title={boost.title}
                        level={boost.level}
                        type={boost.type}
                        amount={boost.amount}
                        cost={boost.cost}
                        needToUnblock={boost.needToUnblock} />
                ))
            }
        </S.Column>
        <S.Column>
            {
                activeBoostsList.filter((_, index) => index % 2 !== 0).map(boost => (
                    <ActiveBoost
                        key={boost.title}
                        id=''
                        imagePath={boost.imagePath}
                        title={boost.title}
                        level={boost.level}
                        type={boost.type}
                        amount={boost.amount}
                        cost={boost.cost}
                        needToUnblock={boost.needToUnblock} />
                ))
            }
        </S.Column>
    </>
);

const EmployeeBoosts = (
    <>
        <S.Column>
            {
                employeeBoostsList.filter((_, index) => index % 2 === 0).map(boost => (
                    <EmployeeBoost
                        key={boost.title}
                        imagePath={boost.imagePath}
                        id=''
                        title={boost.title}
                        level={boost.level}
                        amount={boost.amount}
                        cost={boost.cost}
                        needToUnblock={boost.needToUnblock} />
                ))
            }
        </S.Column>
        <S.Column>
            {
                employeeBoostsList.filter((_, index) => index % 2 !== 0).map(boost => (
                    <EmployeeBoost
                        key={boost.title}
                        id=''
                        imagePath={boost.imagePath}
                        title={boost.title}
                        level={boost.level}
                        amount={boost.amount}
                        cost={boost.cost}
                        needToUnblock={boost.needToUnblock} />
                ))
            }
        </S.Column>
    </>
);

const tabs: Record<BoostActionName, ReactElement> = {
    passive: PassiveBoosts,
    active: ActiveBoosts,
    employee: EmployeeBoosts
}

const BoostsPage = () => {
    const [activeButton, setActiveButton] = useState<BoostActionName>('passive');

    const handleClickAction = (actionName: BoostActionName) => {
        setActiveButton(actionName);
    };

    return (
        <S.Page>
            <S.ActionsGroup>
                {
                    BOOSTS_PAGE_ACTIONS.map((action) => (
                        <ActionButton
                            key={action.id}
                            id={action.id}
                            title={action.title}
                            isActive={activeButton === action.id}
                            onClick={() => handleClickAction(action.id)} />
                    ))
                }
            </S.ActionsGroup>
            <S.BoostsList>
                {tabs[activeButton]}
            </S.BoostsList>
        </S.Page>
    );
}

export { BoostsPage };
