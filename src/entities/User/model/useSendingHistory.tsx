import { useQuery } from "@tanstack/react-query";
import { fetchSendHistory } from "../api";
import { FETCH_SENDING_HISTORY_QUERY_KEY } from "../constants";
import { FetchSendHistoryResponseDto } from "./types";

const useSendingHistory = () => {
    const { data, error, isLoading } = useQuery<FetchSendHistoryResponseDto[], Error>({
        queryKey: [FETCH_SENDING_HISTORY_QUERY_KEY],
        queryFn: fetchSendHistory,
        retry: 1,
    });

    return {
        sendingHistoryData: data,
        sendingHistoryError: error,
        sendingHistoryIsLoading: isLoading,
    }
}

export { useSendingHistory };

