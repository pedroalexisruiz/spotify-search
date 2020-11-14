import { SongsRepository } from '../repository/songs.repository';
import { SongService } from '../services/song.service';
import { Page } from './Page';

export class Searcher implements SongService {
  constructor(private songsRepository: SongsRepository) {}

  searchSongByText(text: string): Promise<Page> {
    return this.songsRepository.searchSongs(text);
  }
}
