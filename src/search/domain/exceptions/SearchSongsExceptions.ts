export class SearchSongsExceptions extends Error {
  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, SearchSongsExceptions.prototype);
  }
}
