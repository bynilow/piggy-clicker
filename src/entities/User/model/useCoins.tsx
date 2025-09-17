import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCoins, sendCoins as sendCoinsApi } from "../api";
import { ADD_COINS_QUERY_KEY, FETCH_USER_QUERY_KEY, LOCALIZATION } from "../constants";
import { AddCoinRequestDto, SendCoinsRequestDto } from "./types";
import { useModal, useUserStore } from "@/shared";

const useCoins = () => {
    const { mutate: mutateAddCoins, error: errorAddCoins } = useMutation({
        mutationKey: [ADD_COINS_QUERY_KEY],
        mutationFn: ({ user_id, coins }: AddCoinRequestDto) => addCoins(user_id, coins),
    });

    const queryClient = useQueryClient();

    const { removeCoinsStore } = useUserStore();

    const { openModal } = useModal();

    const { mutate: sendCoins, error: errorSendCoins, isPending: isSendCoinsPending } = useMutation({
        mutationFn: ({ send_to_id, coins }: SendCoinsRequestDto) => sendCoinsApi({ send_to_id, coins }),
        onSuccess: (_, variables) => {
            // queryClient.invalidateQueries({ queryKey: [FETCH_USER_QUERY_KEY] });
            removeCoinsStore(variables.coins);
            openModal(LOCALIZATION.COINS_SEND_SUCCESS, true);
        }
    });

    return {
        addCoins: mutateAddCoins,
        addCoinsError: errorAddCoins,
        sendCoins,
        errorSendCoins,
        isSendCoinsPending
    }
}

export { useCoins };

