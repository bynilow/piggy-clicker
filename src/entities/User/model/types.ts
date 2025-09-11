interface UserDataResponseDto {
    id: number;
    username: string;
    coins: number;
}

interface AddCoinRequestDto {
    user_id: number;
    coins: number;
}

export type { UserDataResponseDto, AddCoinRequestDto };
