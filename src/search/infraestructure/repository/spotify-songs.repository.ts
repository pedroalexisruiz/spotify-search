import { Inject, Injectable } from '@nestjs/common';
import { SongsRepository } from '../../domain/repository/songs.repository';
import axios, { AxiosResponse } from 'axios';
import { AuthenticationRepository } from '../../domain/repository/authenticacion.repository';
import { SearchSongsExceptions } from '../../domain/exceptions/SearchSongsExceptions';
import { SongResponseDTO } from '../dtos/SongResponseDTO';
import PageFactory from '../factories/PageFactory';
import { Page } from '../../domain/models/Page';

@Injectable()
export class SpotifySongsRepository implements SongsRepository {
  static readonly SEARCH_SONGS_ERROR_MESSAGE =
    'Ocurrió un error al buscar las canciones';
  static readonly SPOTIFY_RESOURCE_TYPE = 'track';
  static readonly SONGS_PER_PAGE = 20;
  static readonly INITIAL_OFFSET = 1;

  constructor(
    @Inject('authenticationRepository')
    private authenticationRepository: AuthenticationRepository,
  ) {}
  async searchSongs(text: string, offset?: number): Promise<Page> {
    return axios
      .get(process.env.NEST_SPOTIFY_SONGS_API, {
        headers: {
          Authorization: `Bearer ${
            (await this.authenticationRepository.$token()).$accessToken
          }`,
        },
        params: {
          q: text,
          offset: `${offset ? offset : SpotifySongsRepository.INITIAL_OFFSET}`,
          limit: SpotifySongsRepository.SONGS_PER_PAGE,
          type: SpotifySongsRepository.SPOTIFY_RESOURCE_TYPE,
        },
        transformResponse: [
          (data) => {
            const response: SongResponseDTO = JSON.parse(data);
            return PageFactory.convertToModel(response.tracks);
          },
        ],
      })
      .then((res:AxiosResponse<Page>) => res.data)
      .catch((error) => {
        throw new SearchSongsExceptions(
          SpotifySongsRepository.SEARCH_SONGS_ERROR_MESSAGE,
        );
      });
  }
}
