import { Song } from 'src/search/domain/models/Song';
import { Artist } from 'src/search/domain/models/Artist';
import { Album } from 'src/search/domain/models/Album';

export class SongBuilder {
  id: string;
  name: string;
  album: Album;
  artists: Artist[];
  discNumber: number;
  durationMs: number;
  explicit: boolean;
  href: string;
  isLocal: boolean;
  previewUrl: string;
  trackNumber: number;
  type: string;
  uri: string;

  public withId(id: string): SongBuilder {
    this.id = id;
    return this;
  }
  public withName(name: string): SongBuilder {
    this.name = name;
    return this;
  }
  public withAlbum(album: Album): SongBuilder {
    this.album = album;
    return this;
  }
  public withArtists(artists: Artist[]): SongBuilder {
    this.artists = artists;
    return this;
  }
  public withDiscNumber(discNumber: number): SongBuilder {
    this.discNumber = discNumber;
    return this;
  }
  public withExplicit(explicit: boolean): SongBuilder {
    this.explicit = explicit;
    return this;
  }
  public withDurationMs(durationMs: number): SongBuilder {
    this.durationMs = durationMs;
    return this;
  }
  public withHref(href: string): SongBuilder {
    this.href = href;
    return this;
  }

  public withIsLocal(isLocal: boolean): SongBuilder {
    this.isLocal = isLocal;
    return this;
  }

  public withPreviewUrl(previewUrl: string): SongBuilder {
    this.previewUrl = previewUrl;
    return this;
  }
  public withTrackNumber(trackNumber: number): SongBuilder {
    this.trackNumber = trackNumber;
    return this;
  }
  public withType(type: string): SongBuilder {
    this.type = type;
    return this;
  }
  public withUri(uri: string): SongBuilder {
    this.uri = uri;
    return this;
  }

  public build(): Song {
    return new Song(
      this.id,
      this.name,
      this.album,
      this.artists,
      this.discNumber,
      this.durationMs,
      this.explicit,
      this.href,
      this.isLocal,
      this.previewUrl,
      this.trackNumber,
      this.type,
      this.uri,
    );
  }
}
