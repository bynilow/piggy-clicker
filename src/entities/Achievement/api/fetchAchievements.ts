import { networkClient } from "@/shared";
import { ACHIEVEMENTS_ENDPOINT } from "../constants";
import { AchievementDto } from "../model";

const fetchAchievements = async (): Promise<AchievementDto[]> => {
    const { data } = await networkClient.get<AchievementDto[]>(ACHIEVEMENTS_ENDPOINT);

    return data;
}

export { fetchAchievements };

