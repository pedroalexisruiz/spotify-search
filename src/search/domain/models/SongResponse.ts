import { Song } from "./Song";

export interface Page {
  offset: number;
  next: string;
  previous?: string;
  total: number;
  items: Song[];
}
