import { Album } from 'src/search/domain/models/Album';
import { Artist } from 'src/search/domain/models/Artist';
import { Image } from 'src/search/domain/models/Image';

export class AlbumBuilder {
  albumType: string = '';
  artists: Artist[] = [];
  href: string = '';
  id: string = '';
  images: Image[] = [];
  name: string = '';
  releaseDate: string = '';
  releaseDatePrecision: string = '';
  totalTracks: number = 0;
  type: string = '';
  uri: string = '';

  public withAlbumType(albumType: string): AlbumBuilder {
    this.albumType = albumType;
    return this;
  }

  public withArtists(artists: Artist[]): AlbumBuilder {
    this.artists = artists;
    return this;
  }

  public withHref(href: string): AlbumBuilder {
    this.href = href;
    return this;
  }
  public withId(id: string): AlbumBuilder {
    this.id = id;
    return this;
  }

  public withImages(images: Image[]): AlbumBuilder {
    this.images = images;
    return this;
  }
  public withName(name: string): AlbumBuilder {
    this.name = name;
    return this;
  }

  public withReleaseDate(releaseDate: string): AlbumBuilder {
    this.releaseDate = releaseDate;
    return this;
  }

  public withReleaseDatePrecision(releaseDatePrecision: string): AlbumBuilder {
    this.releaseDatePrecision = releaseDatePrecision;
    return this;
  }
  public withTotalTracks(totalTracks: number): AlbumBuilder {
    this.totalTracks = totalTracks;
    return this;
  }
  public withType(type: string): AlbumBuilder {
    this.type = type;
    return this;
  }
  public withUri(uri: string): AlbumBuilder {
    this.uri = uri;
    return this;
  }

  public build(): Album {
    return new Album(
      this.albumType,
      this.artists,
      this.href,
      this.id,
      this.images,
      this.name,
      this.releaseDate,
      this.releaseDatePrecision,
      this.totalTracks,
      this.type,
      this.uri,
    );
  }
}
