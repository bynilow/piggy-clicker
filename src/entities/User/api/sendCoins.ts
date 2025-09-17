import { networkClient } from "@/shared";
import { COINS_ADD_ENDPOINT, COINS_SEND_ENDPOINT } from "../constants";
import { SendCoinsRequestDto } from "../model";

const sendCoins = async ({ coins, send_to_id }: SendCoinsRequestDto) => {
    return await networkClient.put(`${COINS_SEND_ENDPOINT}`, {
        coins,
        send_to_id,
    });
}

export { sendCoins };

