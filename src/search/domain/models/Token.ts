export class Token {
  private expirationDateHour: Date;
  static readonly ESTIMATED_SECONDS_OF_REQUEST = 10;
  constructor(
    private accessToken: string,
    private tokenType: string,
    expiresIn: number,
  ) {
    this.expirationDateHour = new Date();
    this.expirationDateHour.setSeconds(
      this.expirationDateHour.getSeconds() +
        expiresIn -
        Token.ESTIMATED_SECONDS_OF_REQUEST,
    );
  }

  get $accessToken(): string {
    return this.accessToken;
  }

  get $tokenType(): string {
    return this.tokenType;
  }

  get $expirationDateHour(): Date {
    return this.expirationDateHour;
  }
}
