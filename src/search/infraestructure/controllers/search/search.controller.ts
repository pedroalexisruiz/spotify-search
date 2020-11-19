import { Controller, Get, Query } from '@nestjs/common';
import { Page } from 'src/search/domain/models/Page';
import { SearchSongsHandler } from '../../../application/handlers/search-songs.handler';

@Controller('search')
export class SearchController {
  constructor(private searchSongslHandler: SearchSongsHandler) {}

  @Get()
  async searchSongs(
    @Query('q') textToSearch: string,
    @Query('offset') offset: number,
  ): Promise<Page> {
    return this.searchSongslHandler.query(textToSearch, offset);
  }
}
