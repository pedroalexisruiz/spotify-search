export interface SongsRepository {
  searchSongs(text: string): Promise<any>;
}
