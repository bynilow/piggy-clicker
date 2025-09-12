import { Loader, LoaderModal, useBoostsStore, useModal, useUserStore } from "@/shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { addBoost, fetchUserBoosts } from "../api";
import { FETCH_BOOSTS_QUERY_KEY } from "../constants";
import { BoostDto } from "./types";

const useBoosts = () => {
    const queryClient = useQueryClient();

    const { id, removeCoinsStore } = useUserStore();
    const { setBoostsStore, setPerClickStore } = useBoostsStore();

    const { data, error, isLoading: fetchIsLoading } = useQuery<BoostDto[], Error>({
        queryKey: [FETCH_BOOSTS_QUERY_KEY],
        queryFn: id ? () => fetchUserBoosts(id) : undefined,
        retry: 1,
    });

    useEffect(() => {
        if (data) {
            setBoostsStore(data);
            setPerClickStore();
        }
    }, [data]);

    const { openModal, closeModal } = useModal();

    const { mutate, isPending } = useMutation({
        mutationFn: ({ boostId, boostCost }: { boostId: string; boostCost: number }) => addBoost(id, boostId, boostCost),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: [FETCH_BOOSTS_QUERY_KEY] });
            removeCoinsStore(data.data.boost_cost);
        },
    })

    useEffect(() => {
        if (isPending) {
            openModal(<Loader isModal />);
        } else {
            closeModal();
        }
    }, [isPending]);

    return {
        boostsData: data,
        boostsError: error,
        boostIsLoading: fetchIsLoading,
        boostIsPending: isPending,
        buyBoost: mutate,
    }
}

export { useBoosts };

