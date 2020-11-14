import { Artist } from "./Artist";


export interface Song {
  id: string;
  name: string;
  artists: Artist[];
  availableMarkets: string[];
  discNumber: number;
  durationMs: number;
  explicit: boolean;
  href: string;
  isPlayable: boolean;
  previewUrl: string;
  trackNumber: number;
  type: string;
  uri: string;
  isLocal: boolean;
}
