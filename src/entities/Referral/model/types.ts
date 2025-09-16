interface ReferralDto {
    user_id: string;
    username: string;
    avatar_url?: string;
    boosts: {
        boost_id: string;
        boost_level: number;
    }[];
}

export type { ReferralDto };
