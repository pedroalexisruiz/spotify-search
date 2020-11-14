import { Image } from './Image';

export interface Artist {
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
  genres?: string[];
  images?: Image[];
  popularity?: number;
}
