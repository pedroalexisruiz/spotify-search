import { Page } from '../models/Page';

export interface SongsRepository {
  searchSongs(text: string, offset?: number): Promise<Page>;
}
