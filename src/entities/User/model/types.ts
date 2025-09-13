interface UserDataResponseDto {
    id: number;
    username: string;
    coins: number;
    last_visited_date: Date;
}

interface AddCoinRequestDto {
    user_id: number;
    coins: number;
}

export type { UserDataResponseDto, AddCoinRequestDto };
