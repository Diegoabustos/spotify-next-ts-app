import { useQuery } from "@tanstack/react-query"
import { fetchToken } from "../api/fetchFunctions"


export const useFetchToken = () => {
    return useQuery(['token'], () => fetchToken())
}