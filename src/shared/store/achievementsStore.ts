import { AchievementDto, achievementList, AchievementModel } from '@/entities/Achievement';
import { activeBoostsList, BoostDto, employeeBoostsList, passiveBoostsList } from '@/entities/Boost';
import { create } from 'zustand'
import { useBoostsStore } from './boostsStore';
import { ReferralDto } from '@/entities/Referral';
import { getAmountWithPercent } from '../lib';
import { REFERRAL_INCOME_MULTIPLIER } from '../constants';
import { ReferralStore } from '../model';

interface AchievementsStore {
    achievements: AchievementModel[];

    setAchievementsStore(achievements: AchievementDto[], boosts: BoostDto[], referrals: ReferralStore[]): void;
}

const passiveBoostsIds = passiveBoostsList.map(passiveBoost => passiveBoost.id);
const activeBoostsIds = activeBoostsList.map(activeBoost => activeBoost.id);
const employeesBoostsIds = employeeBoostsList.map(employeesBoost => employeesBoost.id);

const useAchievementsStore = create<AchievementsStore>()((set) => ({
    achievements: [],

    setAchievementsStore: (achievements, boosts, referrals) => set(() => {
        const allAchievements = achievementList.map(achievementInList => {
            const foundedAchievement = achievements.find(userAchievement => userAchievement.achievement_id === achievementInList.id);

            switch (achievementInList.id) {
                case 'buy_boosts': {
                    return {
                        ...achievementInList,
                        level: foundedAchievement?.achievement_level || 0,
                        currentAmount: boosts.reduce((prevValue, currentValue) => prevValue + currentValue.boost_level, 0),
                    }
                };

                case 'buy_passive': {
                    return {
                        ...achievementInList,
                        level: foundedAchievement?.achievement_level || 0,
                        currentAmount:
                            boosts
                                .filter(boost => passiveBoostsIds.includes(boost.boost_id))
                                .reduce((prevValue, currentValue) => prevValue + currentValue.boost_level, 0),
                    }
                };

                case 'buy_active': {
                    return {
                        ...achievementInList,
                        level: foundedAchievement?.achievement_level || 0,
                        currentAmount:
                            boosts
                                .filter(boost => activeBoostsIds.includes(boost.boost_id))
                                .reduce((prevValue, currentValue) => prevValue + currentValue.boost_level, 0),
                    }
                };

                case 'buy_employees': {
                    return {
                        ...achievementInList,
                        level: foundedAchievement?.achievement_level || 0,
                        currentAmount:
                            boosts
                                .filter(boost => employeesBoostsIds.includes(boost.boost_id))
                                .reduce((prevValue, currentValue) => prevValue + currentValue.boost_level, 0),
                    }
                };

                case 'invite_referrals': {
                    console.log('IN STORE REFERALS', referrals)
                    return {
                        ...achievementInList,
                        level: foundedAchievement?.achievement_level || 0,
                        currentAmount: referrals.length
                    }
                };

                case 'referrals_income': {
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
                        ...achievementInList,
                        level: foundedAchievement?.achievement_level || 0,
                        currentAmount: Number(referralsTotalPerSecond.toFixed(2))
                    }
                };

                case 'buy_one': {
                    return {
                        ...achievementInList,
                        level: foundedAchievement?.achievement_level || 0,
                        currentAmount:
                            Math.max.apply(
                                null,
                                boosts
                                    .filter(boost => [...passiveBoostsIds, ...activeBoostsIds, ...employeesBoostsIds].includes(boost.boost_id))
                                    .map(boost => boost.boost_level)
                            ),
                    }
                };

                default: {
                    return achievementInList;
                }
            }
        })

        return {
            achievements: allAchievements
        }
    }),
}))


export { useAchievementsStore };
