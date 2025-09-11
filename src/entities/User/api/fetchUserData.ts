import { USERS_ENDPOINT } from "../constants"
import { networkClient } from "@/shared";
import { UserDataResponseDto } from "../model";

const fetchUserData = async (userId: number): Promise<UserDataResponseDto> => {
    const { data } = await networkClient.get<UserDataResponseDto>(`${USERS_ENDPOINT}${userId}`);

    return data;
}

export { fetchUserData };
