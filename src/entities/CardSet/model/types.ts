import { Rare } from "@/shared";

interface CardsSetsModel {
  id: string;
  title: string;
  imagePath?: string;
  costMultiplier: number;
  boosts: string[];
}

interface BuyBoostSetRequestDto {
  cost: number;
  boosts: {
    boost_id: string;
    boost_rare: Rare;
  }[];
}

interface BuyBoostSetResponseDto {
  boosts_id: string[];
}

export type { CardsSetsModel, BuyBoostSetRequestDto, BuyBoostSetResponseDto };
