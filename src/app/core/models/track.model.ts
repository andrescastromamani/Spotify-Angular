import { Artist } from "./artist.model";

export interface Track {
    name: string;
    album: string;
    cover: string;
    url: string;
    _id: string | number;
    artist?: Artist;
}
