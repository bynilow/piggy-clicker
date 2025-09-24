import { useBoosts } from '@/entities/Boost';
import { ActionButton, Loader, Page } from '@/shared';
import { ReactElement, useState } from 'react';
import { BOOSTS_PAGE_ACTIONS } from '../constant';
import { BoostActionName } from '../model';
import { ActiveBoosts } from './ActiveBoosts';
import * as S from './BoostsPage.styles';
import { CardSets } from './CardSets';
import { EmployeeBoosts } from './EmployeeBoosts';
import { PassiveBoosts } from './PassiveBoosts/PassiveBoosts';

const tabs: Record<BoostActionName, ReactElement> = {
    passive: <PassiveBoosts />,
    active: <ActiveBoosts />,
    employee: <EmployeeBoosts />,
    sets: <CardSets />
}

const BoostsPage = () => {
    const [activeButton, setActiveButton] = useState<BoostActionName>('passive');

    const handleClickAction = (actionName: BoostActionName) => {
        setActiveButton(actionName);
    };

    const { boostIsLoading } = useBoosts();

    return (
        <Page $justifyContent='start'>
            {
                boostIsLoading
                    ? (
                        <Loader />
                    )
                    : (
                        <>
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
                            {tabs[activeButton]}
                        </>
                    )
            }
        </Page >
    );
}

export { BoostsPage };

