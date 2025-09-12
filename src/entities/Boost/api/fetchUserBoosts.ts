import { BOOSTS_ENDPOINT } from "../constants"
import { networkClient } from "@/shared";
import { BoostDto } from "../model";

const fetchUserBoosts = async (userId: number): Promise<BoostDto[]> => {
    const { data } = await networkClient.get<BoostDto[]>(`${BOOSTS_ENDPOINT}${userId}`);

    return data;
}

export { fetchUserBoosts };
