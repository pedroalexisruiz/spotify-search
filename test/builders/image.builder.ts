import { Image } from 'src/search/domain/models/Image';

export class ImageBuilder {
  private height: number = 0;
  private width: number = 0;
  private url: string = '';

  public withHeight(height: number): ImageBuilder {
    this.height = height;
    return this;
  }

  public withWidth(width: number): ImageBuilder {
    this.width = width;
    return this;
  }
  public withUrl(url: string): ImageBuilder {
    this.url = url;
    return this;
  }

  public build(): Image {
    return new Image(this.height, this.url, this.width);
  }
}
