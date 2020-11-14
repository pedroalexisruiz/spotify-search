import { SongDTO } from './SongDTO';

export interface PageDTO {
  href: string;
  items: SongDTO[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
