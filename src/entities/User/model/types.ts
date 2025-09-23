import { BoostDto } from "@/entities/Boost";

interface UserDataResponseDto {
    id: number;
    username: string;
    avatar_url?: string;
    coins: number;
    last_visited_date: Date;
    referred_by?: number | null;
}

interface CreateUserRequestDto {
    username: string;
    user_id: number;
    avatar_url?: string;
    referred_by?: number;
}

interface AddCoinRequestDto {
    user_id: number;
    coins: number;
}

interface SendCoinsRequestDto {
    send_to_id: number;
    coins: number;
}

interface FetchSendHistoryResponseDto {
    id: number;
    sender_id: string;
    recipient_id: string;
    coins: number;
    datetime: Date;
    avatar_url: string;
    username: string;
}

interface FetchLeadersResponseDto {
    current_user_place: number;
    leaders: {
        id: string;
        username: string;
        avatar_url: string;
        coins: number;
        boosts: BoostDto[];
    }[];
}


export type {
    UserDataResponseDto,
    AddCoinRequestDto,
    CreateUserRequestDto,
    SendCoinsRequestDto,
    FetchSendHistoryResponseDto,
    FetchLeadersResponseDto
};
