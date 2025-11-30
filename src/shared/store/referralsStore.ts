import { employeeBoostsList, passiveBoostsList } from '@/entities/Boost';
import { ReferralDto } from '@/entities/Referral';
import { create } from 'zustand';
import { getAmountWithPercent } from '../lib';
import { REFERRAL_INCOME_MULTIPLIER } from '../constants';
import { ReferralStore } from '../model';

interface ReferralsStore {
    referrals: ReferralStore[] | null;
    referralsTotalPerSecond: number;

    setReferralsStore(referrals: ReferralDto[]): void;
}

const useReferralsStore = create<ReferralsStore>()((set) => ({
    referrals: null,
    referralsTotalPerSecond: 0,

    setReferralsStore: (referrals) => set(() => {
        const totalReferrals: ReferralStore[] = referrals.map(referral => {
            const incomeMultiplier = referral.boosts.reduce((sum, userBoost) => {
                const boost = employeeBoostsList.find(b => b.id === userBoost.boost_id);
                if (boost) {
                    return sum + (boost.amount * userBoost.boost_level);
                }
                return sum;
            }, 0);

            const perSecond = referral.boosts.reduce((sum, userBoost) => {
                const boost = passiveBoostsList.find(b => b.id === userBoost.boost_id);
                if (boost) {
                    return sum + (boost.amount * userBoost.boost_level);
                }
                return sum;
            }, 0);

            return {
                ...referral,
                makeYouPerSecond: Number((getAmountWithPercent(perSecond, incomeMultiplier) * REFERRAL_INCOME_MULTIPLIER).toFixed(2))
            };
        });

        const referralsTotalPerSecond = totalReferrals.reduce((sum, referral) => sum + referral.makeYouPerSecond, 0);

        return {
            referrals: totalReferrals,
            referralsTotalPerSecond,
        }
    }),
}))


export { useReferralsStore };

