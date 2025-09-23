import { networkClient } from "@/shared";
import { LEADERS_ENDPOINT } from "../constants";
import { FetchLeadersResponseDto } from "../model";

const fetchLeaders = async (): Promise<FetchLeadersResponseDto> => {
    const { data } = await networkClient.get(LEADERS_ENDPOINT);
    return data;
}

export { fetchLeaders };

