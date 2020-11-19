import { Artist } from 'src/search/domain/models/Artist';

export class ArtistBuilder {
  private href: string = '';
  private id: string = '';
  private name: string = '';
  private type: string = '';
  private uri: string = '';

  public withHref(href: string): ArtistBuilder {
    this.href = href;
    return this;
  }
  public withId(id: string): ArtistBuilder {
    this.id = id;
    return this;
  }
  public withName(name: string): ArtistBuilder {
    this.name = name;
    return this;
  }
  public withType(type: string): ArtistBuilder {
    this.type = type;
    return this;
  }
  public withUri(uri: string): ArtistBuilder {
    this.uri = uri;
    return this;
  }

  public build(): Artist {
    return new Artist(this.href, this.id, this.name, this.type, this.uri);
  }
}
