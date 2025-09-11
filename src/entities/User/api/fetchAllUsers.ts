import { USERS_ENDPOINT } from "../constants"
import { networkClient } from "@/shared";

const fetchAllUsers = async () => {
    return await networkClient.get(`${USERS_ENDPOINT}`);
}

export { fetchAllUsers };
