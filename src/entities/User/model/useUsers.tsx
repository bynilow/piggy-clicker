import { useQuery } from "@tanstack/react-query";
import { fetchAllUsers } from "../api";
import { FETCH_ALL_USERS_QUERY_KEY } from "../constants";
import { UserDataResponseDto } from "./types";

const useUsers = (enabled?: boolean, username?: string) => {
    const { data, error, isLoading } = useQuery<UserDataResponseDto[], Error>({
        queryKey: [`${FETCH_ALL_USERS_QUERY_KEY}-${username}`],
        queryFn: () => fetchAllUsers(username),
        enabled,
        retry: 1,
    });

    return {
        usersData: data,
        usersError: error,
        usersIsLoading: isLoading,
    }
}

export { useUsers };

