import { Follower } from "./Follower";
import { Image } from "./Image";


export interface Artist {
  followers: Follower[];
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
