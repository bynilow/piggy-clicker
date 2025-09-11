import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser, fetchUserData } from "../api";
import { FETCH_USER_QUERY_KEY } from "../constants";
import { useEffect, useRef } from "react";
import { useUserStore } from "@/shared";
import { UserDataResponseDto } from "./types";

const useUser = (userId?: number, userName?: string) => {
    const queryClient = useQueryClient();

    const { setUser } = useUserStore();

    const { data, error, isLoading } = useQuery<UserDataResponseDto, Error>({
        queryKey: [FETCH_USER_QUERY_KEY],
        queryFn: userId ? () => fetchUserData(userId!) : undefined,
        enabled: !!userId,
        retry: 1,
    });

    useEffect(() => {
        if (data) {
            setUser(data.id, data.username, data.coins);
        }
    }, [data])

    const { mutate } = useMutation({
        mutationFn: userId && userName ? () => createUser(userName, userId) : undefined,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [FETCH_USER_QUERY_KEY] }),
    })

    return {
        userData: data,
        userError: error,
        userIsLoading: isLoading,
        createUser: mutate,
    }
}

export { useUser };
