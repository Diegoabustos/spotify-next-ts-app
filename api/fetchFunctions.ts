import { API_TOKEN, TOKEN_URL } from '../config';
import { Album, Token } from './types';

export const basicFetch = async <returnType>(endpoint: string, parameters?: {}): Promise<returnType>  => {
    const response = await fetch(endpoint, parameters);

    if(!response.ok) throw new Error("Error!");

    const data = await response.json();

    return data;
}

export const fetchToken = async () => {
  let authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `${API_TOKEN}`
  }
  const tokenEndpoint = `${TOKEN_URL}`
  return await basicFetch<Token>(tokenEndpoint, authParameters);
}


export const fetchAlbums = async (search = "", token = ""): Promise<Album> => {
    // Get request using search to get the Artist  ID
    let searchParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let artistID = await basicFetch(`https://api.spotify.com/v1/search?q=${search}&type=artist`, searchParameters);

      // Get request with Artist ID grab all the albums from that artist
      return await basicFetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limi=50`, searchParameters)
} 