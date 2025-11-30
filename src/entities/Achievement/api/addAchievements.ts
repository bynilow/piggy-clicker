import { networkClient } from "@/shared";
import { ADD_ACHIEVEMENT_ENDPOINT } from "../constants";
import { AchievementDto } from "../model";

const addAchievements = async (achievementId: string) => {
    return await networkClient.put<AchievementDto>(ADD_ACHIEVEMENT_ENDPOINT, {
        achievement_id: achievementId
    });
}

export { addAchievements };

