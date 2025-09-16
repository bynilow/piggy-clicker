import { useReferralsStore, useUserStore } from "@/shared";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchReferrals } from "../api";
import { FETCH_REFERRALS_QUERY_KEY } from "../constants";
import { ReferralDto } from "./types";

const useReferrals = () => {
    const queryClient = useQueryClient();

    const { id } = useUserStore();
    const { setReferralsStore } = useReferralsStore();

    const { data, error, isLoading: fetchIsLoading } = useQuery<ReferralDto[], Error>({
        queryKey: [FETCH_REFERRALS_QUERY_KEY],
        queryFn: id ? () => fetchReferrals() : undefined,
        retry: 1,
        enabled: !!id
    });

    useEffect(() => {
        if (data) {
            setReferralsStore(data);
        }
    }, [data]);

    return {
        referrals: data,
        referralsError: error,
        referralsIsLoading: fetchIsLoading,
    }
}

export { useReferrals };

