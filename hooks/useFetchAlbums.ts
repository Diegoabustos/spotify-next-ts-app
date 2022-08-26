import { useQuery } from "@tanstack/react-query"
// Fetch Functions
import { fetchAlbums } from "../api/fetchFunctions";


export const useFetchAlbums = (search: string, token: any) => {
  return useQuery(['morty'], () => fetchAlbums(search, token))
};
