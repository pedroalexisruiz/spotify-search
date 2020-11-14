import { Page } from '../models/Page';

export interface SongService {
  searchSongByText(text: string, offset?: number): Promise<Page>;
}
