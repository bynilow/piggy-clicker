import { activeBoostsList, BoostDto, employeeBoostsList, passiveBoostsList } from '@/entities/Boost';
import { create } from 'zustand'

interface BoostsStore {
    boosts: BoostDto[];
    perClick: number;
    incomeMultiplier: number;
    perSecond: number;

    setBoostsStore(boosts: BoostDto[]): void;
    setPerClickStore(): void;
    setIncomeMultiplierStore(): void;
    setPerSecondStore(): void;
}

const useBoostsStore = create<BoostsStore>()((set) => ({
    boosts: [],
    perClick: 1,
    incomeMultiplier: 1,
    perSecond: 0,

    setBoostsStore: (boosts) => set(() => ({ boosts })),
    setPerClickStore: () => set((state) => {
        const perClick = state.boosts.reduce((sum, userBoost) => {
            const boost = activeBoostsList.find(b => b.id === userBoost.boost_id);
            if (boost) {
                return sum + (boost.amount * userBoost.boost_level);
            }
            return sum;
        }, 1);

        return {
            perClick
        }
    }),
    setIncomeMultiplierStore: () => set((state) => {
        const incomeMultiplier = state.boosts.reduce((sum, userBoost) => {
            const boost = employeeBoostsList.find(b => b.id === userBoost.boost_id);
            if (boost) {
                return sum + (boost.amount * userBoost.boost_level);
            }
            return sum;
        }, 1);

        return {
            incomeMultiplier
        }
    }),
    setPerSecondStore: () => set((state) => {
        const perSecond = state.boosts.reduce((sum, userBoost) => {
            const boost = passiveBoostsList.find(b => b.id === userBoost.boost_id);
            if (boost) {
                return sum + (boost.amount * userBoost.boost_level);
            }
            return sum;
        }, 1);

        return {
            perSecond
        }
    }),
}))


export { useBoostsStore };
