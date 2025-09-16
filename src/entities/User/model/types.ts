interface UserDataResponseDto {
    id: number;
    username: string;
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

export type { UserDataResponseDto, AddCoinRequestDto, CreateUserRequestDto };
