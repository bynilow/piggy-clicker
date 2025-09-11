import { BOOSTS_ENDPOINT } from "../constants"
import { networkClient } from "@/shared";

const fetchUserBoosts = async (userId: number) => {
    return await networkClient.get(`${BOOSTS_ENDPOINT}${userId}`);
}

export { fetchUserBoosts };
