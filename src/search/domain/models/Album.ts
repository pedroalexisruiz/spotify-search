import { Artist } from './Artist';
import { Image } from './Image';

export class Album {
  constructor(
    private albumType: string,
    private artists: Artist[],
    private href: string,
    private id: string,
    private images: Image[],
    private name: string,
    private releaseDate: string,
    private releaseDatePrecision: string,
    private totalTracks: number,
    private type: string,
    private uri: string,
  ) {}
}
