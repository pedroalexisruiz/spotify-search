import { Controller, Get, Query } from '@nestjs/common';
import { SearchSongsHandler } from 'src/search/application/handlers/search-songs.handler';

@Controller('search')
export class SearchController {
  constructor(private searchSongslHandler: SearchSongsHandler) {}

  @Get()
  async searchSongs(@Query('q') textToSearch: string) {
    return this.searchSongslHandler.query(textToSearch);
  }
}
