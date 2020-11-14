import { Inject, Injectable } from '@nestjs/common';
import { SongsRepository } from 'src/search/domain/repository/songs.repository';
import axios from 'axios';
import { AuthenticationRepository } from 'src/search/domain/repository/authenticacion.repository';
import { SearchSongsExceptions } from 'src/search/domain/exceptions/SearchSongsExceptions';
import { SongResponseSchema } from '../schemas/SongResponseSchema';

@Injectable()
export class SpotifySongsRepository implements SongsRepository {
  static readonly SEARCH_SONGS_ERROR_MESSAGE =
    'Ocurrió un error al buscar las canciones';
  constructor(
    @Inject('authenticationRepository')
    private authenticationRepository: AuthenticationRepository,
  ) {}
  async searchSongs(text: string, offset?: number): Promise<any> {
    return axios
      .get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: `Bearer ${
            (await this.authenticationRepository.$token()).$accessToken
          }`,
        },
        params: {
          q: text,
          offset: `${offset ? offset : 1}`,
          limit: 20,
          type: 'track',
        },
        transformResponse: [
          (data) => {
            const response: SongResponseSchema = JSON.parse(data);
            return response.tracks;
          },
        ],
      })
      .then((res) => res.data)
      .catch((error) => {
        throw new SearchSongsExceptions(
          SpotifySongsRepository.SEARCH_SONGS_ERROR_MESSAGE,
        );
      });
  }
}
