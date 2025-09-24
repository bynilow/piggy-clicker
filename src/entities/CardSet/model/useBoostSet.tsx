import { Error, Loader, useModal, useUserStore } from "@/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { buyBoostSet } from "../api";
import { BuyBoostSetRequestDto } from "./types";
import { FETCH_BOOSTS_QUERY_KEY } from "@/entities/Boost";
import { ReceivedCardsModal } from "../ui";

const useBoostSet = () => {
    const queryClient = useQueryClient();

    const { removeCoinsStore } = useUserStore();

    const { openModal, closeModal } = useModal();

    const { mutate, isPending, data } = useMutation({
        mutationFn: (data: BuyBoostSetRequestDto) => buyBoostSet(data),
        onMutate: () => {
            openModal(<Loader isModal />);
        },
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: [FETCH_BOOSTS_QUERY_KEY] });
            removeCoinsStore(variables.cost);
            openModal(<ReceivedCardsModal boostsIds={data.data.boosts_id} />);
        },
        onError: () => {
            openModal(<Error />);
        },
    })

    return {
        boostSetIsPending: isPending,
        buyBoostSet: mutate,
    }
}

export { useBoostSet };

