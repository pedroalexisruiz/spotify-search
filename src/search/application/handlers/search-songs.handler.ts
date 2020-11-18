import { Inject, Injectable } from '@nestjs/common';
import { Page } from '../../domain/models/Page';
import { SongService } from '../../domain/services/song.service';

@Injectable()
export class SearchSongsHandler {
  constructor(@Inject('searcherService') private searcher: SongService) {}
  query(text: string, offset?: number): Promise<Page> {
    return this.searcher.searchSongByText(text, offset);
  }
}
