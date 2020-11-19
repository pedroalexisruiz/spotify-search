import { Page } from 'src/search/domain/models/Page';
import { Song } from 'src/search/domain/models/Song';

export class PageBuilder {
  href: string = '';
  items: Song[] = [];
  limit: number = 0;
  next: string = '';
  offset: number = 0;
  previous: string = '';
  total: number = 0;

  public withHref(href: string): PageBuilder {
    this.href = href;
    return this;
  }
  public withItems(items: Song[]): PageBuilder {
    this.items = items;
    return this;
  }
  public withNext(next: string): PageBuilder {
    this.next = next;
    return this;
  }
  public withOffset(offset: number): PageBuilder {
    this.offset = offset;
    return this;
  }
  public withLPrevious(previous: string): PageBuilder {
    this.previous = previous;
    return this;
  }
  public withTotal(total: number): PageBuilder {
    this.total = total;
    return this;
  }

  public build(): Page {
    return new Page(
      this.href,
      this.items,
      this.limit,
      this.next,
      this.offset,
      this.previous,
      this.total,
    );
  }
}
