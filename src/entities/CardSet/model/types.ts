import { Rare } from "@/shared";

interface CardsSetsModel {
  id: string;
  title: string;
  imagePath?: string;
  costMultiplier: number;
  boosts: string[];
}

interface OpenBoostKitsRequestDto {
  cost: number;
  boosts: {
    boost_id: string;
    boost_rare: Rare;
  }[];
}

interface OpenBoostKitsResponseDto {
  boosts_id: string[];
}


interface BoostsKitsDto {
  id: string;
  user_id: string;
  kit_id: string;
  count: number;
}

interface AddBoostsKitsRequestDto {
  kit_id: string;
  count: number;
}


export type { CardsSetsModel, OpenBoostKitsRequestDto, OpenBoostKitsResponseDto, BoostsKitsDto, AddBoostsKitsRequestDto };
