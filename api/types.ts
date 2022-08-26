export type Album = {
    id: number;
    name: string;
    images?: AlbumImage[];
    label: string;
    release_date: string;
    total_tracks: number;
    albumTracks: Tracks[]
    tracks: Tracks;
}

export type Tracks = {
    id: string;
    items: [];
    name: string;
    artists: Artists[];
    release_date: number;
    duration_ms: number;
}

export type AlbumImage =  {
    url: string
}

export type Token = {
    access_token: string;
}



export type Artists = {
    name: string
}

