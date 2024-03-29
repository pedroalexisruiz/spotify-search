import { Searcher } from '../domain/models/Searcher';
import { SongsRepository } from '../domain/repository/songs.repository';
import { SpotifyAuthenticationRepository } from '../infraestructure/repository/spotify-authentication.repository';
import { SpotifySongsRepository } from '../infraestructure/repository/spotify-songs.repository';

export const SearcherServiceProvider = {
  provide: 'searcherService',
  useFactory: (coreRepository: SongsRepository) => new Searcher(coreRepository),
  inject: [SpotifySongsRepository],
};

export const SpotifyAuthenticacionRepositoryProvider = {
  provide: 'authenticationRepository',
  useClass: SpotifyAuthenticationRepository,
};
