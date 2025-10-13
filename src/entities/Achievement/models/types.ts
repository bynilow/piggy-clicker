import { Rare } from "@/shared";

type LevelsAmount = Record<Rare, number>;
type GiftBoostSet = Record<Rare, number>;

interface AchievementModel {
  id: string;
  description: string;
  image: string;
  level: Rare;
  levelsAmount: LevelsAmount;
  giftBoostSetId: string;
  giftBoostSetByLevel: GiftBoostSet;
};

export type { AchievementModel };
