import { networkClient } from "@/shared";
import { COINS_ADD_ENDPOINT } from "../constants";

const sendCoins = async (userId: number, sendToId: number, coins: number) => {
    return await networkClient.put(`${COINS_ADD_ENDPOINT}`, {
        user_id: userId,
        send_to: sendToId,
        coins
    });
}

export { sendCoins };

