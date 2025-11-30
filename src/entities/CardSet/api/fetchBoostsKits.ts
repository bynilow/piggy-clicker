import { networkClient } from "@/shared";
import { BOOSTS_KITS_ENDPOINT } from "../constants";
import { BoostsKitsDto } from "../model";

const fetchBoostsKits = async (): Promise<BoostsKitsDto[]> => {
    const { data } = await networkClient.get<BoostsKitsDto[]>(BOOSTS_KITS_ENDPOINT);

    return data;
}

export { fetchBoostsKits };

