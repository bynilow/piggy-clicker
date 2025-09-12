import { useUserStore } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { addCoins } from "../api";
import { ADD_COINS_QUERY_KEY } from "../constants";
import { AddCoinRequestDto } from "./types";

const useCoins = () => {
    const { setCoinsStore } = useUserStore();

    const { mutate, error } = useMutation({
        mutationKey: [ADD_COINS_QUERY_KEY],
        mutationFn: ({ user_id, coins }: AddCoinRequestDto) => addCoins(user_id, coins),
        onSuccess: (data) => setCoinsStore(data.data.coins),
    })

    return {
        addCoins: mutate,
        addCoinsError: error,
    }
}

export { useCoins };

