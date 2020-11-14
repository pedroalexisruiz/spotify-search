import { Album } from './Album';
import { Artist } from './Artist';

export interface Song {
  id: string;
  name: string;
  album: Album;
  artists: Artist[];
  discNumber: number;
  durationMs: number;
  explicit: boolean;
  href: string;
  isLocal: boolean;
  previewUrl: string;
  trackNumber: number;
  type: string;
  uri: string;
}
