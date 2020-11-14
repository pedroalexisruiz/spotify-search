import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Token } from 'src/search/domain/models/Token';
import { AuthenticationRepository } from 'src/search/domain/repository/authenticacion.repository';
import { TokenSchema } from '../schemas/TokenSchema';
import qs from 'qs';
import { AuthenticationException } from 'src/search/domain/exceptions/AuthenticationException';

@Injectable()
export class SpotifyAuthenticationRepository
  implements AuthenticationRepository {
  token: Token;
  static readonly AUTHENTICATION_ERROR_MESSAGE =
    'Ocurrió un error al autenticarse';
  async authenticate(): Promise<void> {
    const body = Object.entries({
      grant_type: 'client_credentials',
    })
      .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
      .join('&');

    const tokenSchema: TokenSchema = await axios
      .post('https://accounts.spotify.com/api/token', body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            Buffer.from(
              process.env.REACT_APP_SPOTIFY_CLIENT_ID +
                ':' +
                process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
            ).toString('base64'),
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw new AuthenticationException(
          SpotifyAuthenticationRepository.AUTHENTICATION_ERROR_MESSAGE,
        );
      });
    this.token = new Token(
      tokenSchema.access_token,
      tokenSchema.token_type,
      tokenSchema.expires_in,
    );
  }

  async $token(): Promise<Token> {
    if (!this.token || this.token.$expirationDateHour < new Date()) {
      await this.authenticate();
    }
    return this.token;
  }
}
