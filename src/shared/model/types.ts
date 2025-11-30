import { ReferralDto } from "@/entities/Referral";

type Rare = 'common' | 'rare' | 'mythical' | 'legendary';

interface ReferralStore extends ReferralDto {
  makeYouPerSecond: number;
};

export type { Rare, ReferralStore };
