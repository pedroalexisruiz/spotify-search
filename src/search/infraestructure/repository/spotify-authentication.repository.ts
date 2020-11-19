import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { Token } from '../../domain/models/Token';
import { AuthenticationRepository } from '../../domain/repository/authenticacion.repository';
import { TokenDTO } from '../dtos/TokenDTO';
import { AuthenticationException } from '../../domain/exceptions/AuthenticationException';

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

    const tokenSchema: TokenDTO = await axios
      .post(process.env.NEST_SPOTIFY_AUTHENTICATION_API, body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${this.credentials}`,
        },
      })
      .then((res: AxiosResponse<TokenDTO>) => res.data)
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

  private get credentials(): string {
    return Buffer.from(
      process.env.NEST_APP_SPOTIFY_CLIENT_ID +
        ':' +
        process.env.NEST_APP_SPOTIFY_CLIENT_SECRET,
    ).toString('base64');
  }
}
