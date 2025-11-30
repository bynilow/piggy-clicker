import { Rare } from "@/shared";

type LevelsAmount = Record<Rare, number>;
type GiftBoostSet = Record<Rare, number>;

interface AchievementModel {
  id: string;
  description: string;
  image: string;
  level: number;
  currentAmount: number;
  levelsAmount: LevelsAmount;
  giftBoostSetId: string;
  giftBoostSetByLevel: GiftBoostSet;
};

interface AchievementDto {
  id: string;
  user_id: string;
  achievement_id: string;
  achievement_level: number;
};

interface AddAchievementRequestDto {
  achievement_id: string;
};

export type { AchievementModel, AchievementDto, AddAchievementRequestDto };
