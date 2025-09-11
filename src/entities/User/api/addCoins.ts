import { COINS_ADD_ENDPOINT } from "../constants";
import { networkClient } from "@/shared";

const addCoins = async (userId: number, coins: number) => {
    return await networkClient.put<{ coins: number }>(`${COINS_ADD_ENDPOINT}`, {
        user_id: userId,
        coins
    });
}

export { addCoins };

