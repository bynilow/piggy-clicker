import { USERS_ENDPOINT } from "../constants"
import { networkClient } from "@/shared";
import { UserDataResponseDto } from "../model";

const fetchAllUsers = async (username?: string): Promise<UserDataResponseDto[]> => {
    const { data } = await networkClient.get(`${USERS_ENDPOINT}`, { params: { username } });
    return data;
}

export { fetchAllUsers };
