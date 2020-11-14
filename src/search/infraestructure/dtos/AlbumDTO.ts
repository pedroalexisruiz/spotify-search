import { ArtistDTO } from './ArtistDTO';
import { ExternalUrlsDTO } from './ExternalUrlsDTO';
import { ImageDTO } from './ImageDTO';

export interface AlbumDTO {
  album_type: string;
  artists: ArtistDTO[];
  href: string;
  id: string;
  images: ImageDTO[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
  available_markets: string[];
  external_urls: ExternalUrlsDTO;
}
