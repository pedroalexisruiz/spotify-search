import { Artist } from './Artist';
import { Image } from './Image';

export interface Album {
  albumType: string;
  artists: Artist[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  releaseDate: string;
  releaseDatePrecision: string;
  totalTracks: number;
  type: string;
  uri: string;
}
