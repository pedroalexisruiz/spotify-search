import { Controller, Get, Query } from '@nestjs/common';
import { SearchSongsHandler } from '../../../application/handlers/search-songs.handler';

@Controller('search')
export class SearchController {
  constructor(private searchSongslHandler: SearchSongsHandler) {}

  @Get()
  async searchSongs(
    @Query('q') textToSearch: string,
    @Query('offset') offset: number,
  ) {
    return this.searchSongslHandler.query(textToSearch, offset);
  }
}
