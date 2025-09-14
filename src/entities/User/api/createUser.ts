import { USERS_ENDPOINT } from "../constants"
import { networkClient } from "@/shared";

const createUser = async (username: string, user_id: number, reffered_by?: number) => {
    return await networkClient.post(USERS_ENDPOINT, {
        user_id,
        username,
        reffered_by: reffered_by
    });
}

export { createUser };
