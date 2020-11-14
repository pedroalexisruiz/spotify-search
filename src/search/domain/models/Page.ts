import { Song } from './Song';

export interface Page {
  href: string;
  items: Song[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
