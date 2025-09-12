import { networkClient } from "@/shared";
import { BOOSTS_BUY_ENDPOINT } from "../constants";
import { BoostDto } from "../model";

const addBoost = async (userId: number, boostId: string, boostCost: number) => {
    return await networkClient.put<BoostDto & { boost_cost: number }>(`${BOOSTS_BUY_ENDPOINT}`, {
        user_id: userId,
        boost_id: boostId,
        boost_cost: boostCost
    });
}

export { addBoost };

