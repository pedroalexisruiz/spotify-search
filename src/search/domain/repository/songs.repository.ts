import { Page } from '../models/Page';

export interface SongsRepository {
  searchSongs(text: string): Promise<Page>;
}
