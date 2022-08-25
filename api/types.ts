export type AlbumImage =  {
    url: string
}

export type Album = {
    id: number;
    name: string;
    label: string;
    release_date: string;
    total_tracks: number;
    albumImge: AlbumImage[];
}

export type Artists = {
    name: string
}

export type Tracks = {
    items: Album[];
    name: string;
    artists: Artists[];
    release_date: number;
}