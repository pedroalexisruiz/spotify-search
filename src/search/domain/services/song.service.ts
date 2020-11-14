import { Page } from '../models/SongResponse';

export interface SongService {
  searchSongByText(text: string): Promise<Page>;
}
