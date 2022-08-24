// Configuration for the Spotify API

const TOKEN_URL: string = 'https://accounts.spotify.com/api/token';
const CLIENT_ID : string | undefined = process.env.CLIENT_ID;
const CLIENT_SECRET : string | undefined = process.env.CLIENT_SECRET;

const API_TOKEN: string =  `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

export {
    TOKEN_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    API_TOKEN
}