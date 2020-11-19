import { Album } from './Album';
import { Artist } from './Artist';

export class Song {
  constructor(
    private id: string,
    private name: string,
    private album: Album,
    private artists: Artist[],
    private discNumber: number,
    private durationMs: number,
    private explicit: boolean,
    private href: string,
    private isLocal: boolean,
    private previewUrl: string,
    private trackNumber: number,
    private type: string,
    private uri: string,
  ) {}
}
