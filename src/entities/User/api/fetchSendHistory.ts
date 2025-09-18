import { networkClient } from "@/shared";
import { SENDING_HISTORY_ENDPOINT } from "../constants";
import { FetchSendHistoryResponseDto } from "../model";

const fetchSendHistory = async (): Promise<FetchSendHistoryResponseDto[]> => {
    const { data } = await networkClient.get(SENDING_HISTORY_ENDPOINT);

    return data;
}

export { fetchSendHistory };
