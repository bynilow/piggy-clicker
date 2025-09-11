import { networkClient } from "@/shared";
import { BOOSTS_BUY_ENDPOINT } from "../constants";

const addBoost = async (userId: number, boostId: string, boostCost: number) => {
    return await networkClient.put(`${BOOSTS_BUY_ENDPOINT}`, {
        user_id: userId,
        boost_id: boostId,
        boost_cost: boostCost
    });
}

export { addBoost };

