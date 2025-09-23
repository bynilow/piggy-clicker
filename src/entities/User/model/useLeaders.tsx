import { useQuery } from "@tanstack/react-query";
import { fetchLeaders } from "../api";
import { FETCH_LEADERS_QUERY_KEY } from "../constants";
import { FetchLeadersResponseDto } from "./types";

const useLeaders = () => {
    const { data, error, isLoading } = useQuery<FetchLeadersResponseDto, Error>({
        queryKey: [FETCH_LEADERS_QUERY_KEY],
        queryFn: fetchLeaders,
        retry: 1,
    });

    return {
        leadersData: data,
        leadersError: error,
        isLeadersLoading: isLoading,
    }
}

export { useLeaders };

