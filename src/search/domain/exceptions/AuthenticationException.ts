export class AuthenticationException extends Error {
  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, AuthenticationException.prototype);
  }
}
