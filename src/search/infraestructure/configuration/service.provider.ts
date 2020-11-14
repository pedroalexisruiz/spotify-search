import { Searcher } from 'src/search/domain/models/Searcher';
import { SongsRepository } from 'src/search/domain/repository/songs.repository';
import { SpotifyAuthenticationRepository } from '../repository/spotify-authentication.repository';
import { SpotifySongsRepository } from '../repository/spotify-songs.repository';

export const SearcherServiceProvider = {
  provide: 'searcherService',
  useFactory: (coreRepository: SongsRepository) => new Searcher(coreRepository),
  inject: [SpotifySongsRepository],
};

export const SpotifyAuthenticacionRepositoryProvider = {
  provide: 'authenticationRepository',
  useClass: SpotifyAuthenticationRepository,
};
