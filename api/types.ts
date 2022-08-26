export type AlbumImage =  {
    url: string
}

export type Token = {
    access_token: any;
}

export type Album = {
    id: number;
    name: string;
    label: string;
    release_date: string;
    images: any;
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