import { ActionButton, CoinIcon, Divider } from '@/shared/ui';
import * as S from './Main.styles';
import { JSX, useState } from 'react';
import { ClickPage } from '../../ClickPage';
import { BoostsPage } from '../../BoostsPage/ui';
import { ReferralsPage } from '../../ReferralsPage/ui';
import { getFormattedCoins } from '@/shared/lib';
import { MAIN_PAGE_ACTIONS } from '../constants';
import { TargetAndTransition, VariantLabels } from 'motion/dist/react';
import { AnimatePresence, motion } from 'motion/react';
import { MainPageActionsId } from '../model';

const tabs: Record<MainPageActionsId, JSX.Element> = {
    main: <ClickPage />,
    boosts: <BoostsPage />,
    referrals: <ReferralsPage />,
    send: <></>
}

const MainPage = () => {
    const [activeButton, setActiveButton] = useState<MainPageActionsId>('main');


    const handleClickAction = (actionName: MainPageActionsId) => {
        setActiveButton(actionName);
    }

    const initialStyles: TargetAndTransition | VariantLabels = {
        filter: 'blur(10px)',
        opacity: 0,
        translateY: 30
    }

    const targetStyles: TargetAndTransition | VariantLabels = {
        filter: 'blur(0px)',
        opacity: 1,
        translateY: 0
    }

    return (
        <S.Main>
            <S.Head>
                <S.BalanceInfo>
                    <S.Balance>
                        {getFormattedCoins(125525.55)} <CoinIcon />
                    </S.Balance>
                    <S.AutomaticIncome>
                        + {getFormattedCoins(22.52)} / сек
                    </S.AutomaticIncome>
                </S.BalanceInfo>

                <S.Actions>
                    {
                        MAIN_PAGE_ACTIONS.map((action, index) => (
                            <ActionButton
                                key={action.id}
                                id={action.id}
                                title={action.title}
                                iconUrl={action.iconUrl}
                                isActive={activeButton === action.id}
                                onClick={() => handleClickAction(action.id)} />
                        ))
                    }
                </S.Actions>
                <Divider />
            </S.Head>

            {
                <AnimatePresence mode='wait'>
                    <motion.div
                        style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}
                        transition={{ power: 3 }}
                        key={activeButton}
                        initial={initialStyles}
                        animate={targetStyles}
                        exit={initialStyles}>
                        {tabs[activeButton]}
                    </motion.div>
                </AnimatePresence>
            }

        </S.Main>
    );
}

export { MainPage };