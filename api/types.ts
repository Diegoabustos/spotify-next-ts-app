export type AlbumImage =  {
    url: string
}

export type Token = {
    access_token: string;
}

export type Album = {
    id: number;
    name: string;
    images: [];
    label: string;
    release_date: string;
    total_tracks: number;
    albumImge: AlbumImage[];
    tracks: Tracks;
}

export type Artists = {
    name: string
}

export type Tracks = {
    items: Album[];
    name: string;
    artists: Artists[];
    release_date: number;
    duration_ms: any;
}