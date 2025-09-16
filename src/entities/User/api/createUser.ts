import { USERS_ENDPOINT } from "../constants"
import { networkClient } from "@/shared";
import { CreateUserRequestDto } from "../model";

const createUser = async ({ user_id, username, avatar_url, referred_by }: CreateUserRequestDto) => {
    return await networkClient.post(USERS_ENDPOINT, {
        user_id,
        username,
        referred_by,
        avatar_url
    });
}

export { createUser };
