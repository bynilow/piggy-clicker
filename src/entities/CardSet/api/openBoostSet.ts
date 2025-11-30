import { networkClient } from "@/shared";
import { OpenBoostKitsRequestDto, OpenBoostKitsResponseDto } from "../model";
import { BOOST_KITS_OPEN_ENDPOINT } from "../constants";

const openBoostSet = async (data: OpenBoostKitsRequestDto) => {
    return await networkClient.post<OpenBoostKitsResponseDto>(BOOST_KITS_OPEN_ENDPOINT, data);
}

export { openBoostSet };

