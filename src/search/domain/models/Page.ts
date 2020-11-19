import { Song } from './Song';

export class Page {
  constructor(
    private href: string,
    private items: Song[],
    private limit: number,
    private next: string,
    private offset: number,
    private previous: string,
    private total: number,
  ) {}
}
