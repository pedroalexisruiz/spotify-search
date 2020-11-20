import { Module } from '@nestjs/common';
import { SearchSongsHandler } from './application/handlers/search-songs.handler';
import {
  SearcherServiceProvider,
  SpotifyAuthenticacionRepositoryProvider,
} from './configuration/service.provider';
import { SearchController } from './infraestructure/controllers/search/search.controller';
import { SpotifySongsRepository } from './infraestructure/repository/spotify-songs.repository';

@Module({
  controllers: [SearchController],
  providers: [
    SpotifyAuthenticacionRepositoryProvider,
    SpotifySongsRepository,
    SearcherServiceProvider,
    SearchSongsHandler,
  ],
})
export class SearchModule {}
