import { activeBoostsList, BoostDto } from '@/entities/Boost';
import { create } from 'zustand'

interface BoostsStore {
    boosts: BoostDto[];
    perClick: number;

    setBoostsStore(boosts: BoostDto[]): void;
    setPerClickStore(): void;
}

const useBoostsStore = create<BoostsStore>()((set) => ({
    boosts: [],
    perClick: 0,

    setBoostsStore: (boosts) => set(() => ({ boosts })),
    setPerClickStore: () => set((state) => {
        const perClick = state.boosts.reduce((sum, userBoost) => {
            const boost = activeBoostsList.find(b => b.id === userBoost.boost_id);
            if (boost) {
                return sum + (boost.amount * userBoost.boost_level);
            }
            return sum;
        }, 0);

        return {
            perClick
        }
    }),
}))


export { useBoostsStore };
