import { networkClient } from "@/shared";
import { BOOSTS_KITS_ADD_ENDPOINT } from "../constants";
import { AddBoostsKitsRequestDto, BoostsKitsDto } from "../model";

const addBoostKit = async (boostKit: AddBoostsKitsRequestDto) => {
    return await networkClient.put<BoostsKitsDto>(BOOSTS_KITS_ADD_ENDPOINT, boostKit);
}

export { addBoostKit };

