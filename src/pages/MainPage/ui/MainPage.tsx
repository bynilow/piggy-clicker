import { SendPage } from '@/pages/SendPage';
import { useBoostsStore, useUserStore } from '@/shared';
import { getAmountWithPercent, getFormattedCoins } from '@/shared/lib';
import { ActionButton, CoinIcon, Divider } from '@/shared/ui';
import { TargetAndTransition, VariantLabels } from 'motion/dist/react';
import { AnimatePresence, motion } from 'motion/react';
import { JSX, useState } from 'react';
import { BoostsPage } from '../../BoostsPage/ui';
import { ClickPage } from '../../ClickPage';
import { ReferralsPage } from '../../ReferralsPage/ui';
import { BALANCE_SIZE_MEDIUM_COUNT, BALANCE_SIZE_SMALL_COUNT, MAIN_PAGE_ACTIONS } from '../constants';
import { MainPageActionsId } from '../model';
import * as S from './Main.styles';
import { LeadersPage } from '@/pages/LeadersPage';

const tabs: Record<MainPageActionsId, JSX.Element> = {
    main: <ClickPage />,
    boosts: <BoostsPage />,
    referrals: <ReferralsPage />,
    send: <SendPage />,
    leaders: <LeadersPage />,
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

const MainPage = () => {
    const [activeButton, setActiveButton] = useState<MainPageActionsId>('main');


    const handleClickAction = (actionName: MainPageActionsId, event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center' });

        setActiveButton(actionName);
    }

    const { coins } = useUserStore();

    const { perClick, incomeMultiplier, perSecond } = useBoostsStore();

    const balanceSize =
        coins < BALANCE_SIZE_SMALL_COUNT
            ? coins < BALANCE_SIZE_MEDIUM_COUNT
                ? 'L'
                : 'M'
            : 'S';

    return (
        <S.Main>
            <S.Head>
                <S.BalanceInfo>
                    <S.Balance $size={balanceSize}>
                        {getFormattedCoins(coins || 0, false)} <CoinIcon />
                    </S.Balance>
                    <S.Income>
                        <S.IncomeProperty>+{getFormattedCoins(getAmountWithPercent(perSecond, incomeMultiplier))} / сек</S.IncomeProperty>
                        <S.IncomeProperty>+{getFormattedCoins(getAmountWithPercent(perClick, incomeMultiplier))} / тап</S.IncomeProperty>
                        <S.IncomeProperty>+{getFormattedCoins(incomeMultiplier)}%</S.IncomeProperty>
                    </S.Income>
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
                                onClick={(event) => handleClickAction(action.id, event)} />
                        ))
                    }
                </S.Actions>
                <Divider />
            </S.Head>

            {
                <AnimatePresence mode='wait'>
                    <motion.div
                        style={{ width: '100%', height: '100%', position: 'relative', overflow: 'scroll' }}
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

