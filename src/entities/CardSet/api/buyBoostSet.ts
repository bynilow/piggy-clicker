import { networkClient } from "@/shared";
import { BUY_BOOST_SET_ENDPOINT } from "../constants";
import { BuyBoostSetRequestDto, BuyBoostSetResponseDto } from "../model";

const buyBoostSet = async (data: BuyBoostSetRequestDto) => {
    return await networkClient.post<BuyBoostSetResponseDto>(BUY_BOOST_SET_ENDPOINT, data);
}

export { buyBoostSet };

