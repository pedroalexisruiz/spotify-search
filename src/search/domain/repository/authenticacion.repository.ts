import { Token } from '../models/Token';

export interface AuthenticationRepository {
  token: Token;
  authenticate(): Promise<void>;
  $token(): Promise<Token>;
}
