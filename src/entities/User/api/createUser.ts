import { USERS_ENDPOINT } from "../constants"
import { networkClient } from "@/shared";

const createUser = async (userName: string, userId: number) => {
    return await networkClient.post(USERS_ENDPOINT, {
        user_id: userId,
        username: userName
    });
}

export { createUser };
