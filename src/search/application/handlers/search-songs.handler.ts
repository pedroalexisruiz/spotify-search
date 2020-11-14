import { Inject, Injectable } from '@nestjs/common';
import { Page } from 'src/search/domain/models/SongResponse';
import { SongService } from 'src/search/domain/services/song.service';

@Injectable()
export class SearchSongsHandler {
  constructor(@Inject('searcherService') private searcher: SongService) {}
  query(text: string): Promise<Page> {
    return this.searcher.searchSongByText(text);
  }
}
