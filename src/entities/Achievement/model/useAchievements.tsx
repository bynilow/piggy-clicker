import { useAchievementsStore, useBoostsStore, useReferralsStore, useUserStore } from "@/shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addAchievements, fetchAchievements } from "../api";
import { FETCH_ACHIEVEMENTS_QUERY_KEY } from "../constants";
import { AchievementDto } from "./types";
import { useEffect } from "react";
import { addBoostKit } from "@/entities/CardSet";
import { AddBoostsKitsRequestDto } from "@/entities/CardSet/model";

const useAchievements = () => {
    const queryClient = useQueryClient();

    const { id } = useUserStore();
    const { boosts } = useBoostsStore();
    const { referrals } = useReferralsStore();
    const { setAchievementsStore } = useAchievementsStore();

    const { data, error, isLoading } = useQuery<AchievementDto[], Error>({
        queryKey: [FETCH_ACHIEVEMENTS_QUERY_KEY],
        queryFn: id ? () => fetchAchievements() : undefined,
        retry: 1,
        enabled: !!id,
    });

    const addAchievementWithKit = async (achievementId: string, boostKit: AddBoostsKitsRequestDto) => {
        await addAchievements(achievementId);
        return addBoostKit(boostKit);
    }

    const { mutate: addAchievement, isPending: isAchievementAddLoading, error: achievementAddingError } = useMutation({
        mutationFn: addAchievementWithKit,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [FETCH_ACHIEVEMENTS_QUERY_KEY] });
        }
    })

    useEffect(() => {
        if (data && referrals) {
            console.log('REFERALS', referrals)
            setAchievementsStore(data, boosts, referrals || []);
        }
    }, [data, referrals])

    return {
        achievementsData: data,
        achievementsError: error,
        achievementsIsLoading: isLoading,
        addAchievement,
        isAchievementAddLoading,
        achievementAddingError
    }
}

export { useAchievements };
