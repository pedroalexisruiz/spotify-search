import { AlbumDTO } from './AlbumDTO';
import { ArtistDTO } from './ArtistDTO';
import { ExternalIdsDTO } from './ExternalIdsDTO';
import { ExternalUrlsDTO } from './ExternalUrlsDTO';

export interface SongDTO {
  id: string;
  name: string;
  album: AlbumDTO;
  artists: ArtistDTO[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  href: string;
  is_local: boolean;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  available_markets: string[];
  external_ids: ExternalIdsDTO;
  external_urls: ExternalUrlsDTO;
  popularity: number;
  is_playable: boolean;
}
