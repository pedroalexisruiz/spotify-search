import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module';
import { SpotifySongsRepository } from '../../src/search/infraestructure/repository/spotify-songs.repository';
import { SONGS_PAGE_MOCK } from '../mocks/SongsPage.mock';
import { Page } from '../../src/search/domain/models/Page';

describe('SearchController', () => {
  let app: INestApplication;
  const songsRepo = {
    searchSongs: async () => SONGS_PAGE_MOCK,
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(SpotifySongsRepository)
      .useValue(songsRepo)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET consultar canciones por texto`, async () => {
    const textToSearch = 'Happy';
    const songsPage: Page = SONGS_PAGE_MOCK;

    const query: any = await request(app.getHttpServer())
      .get(`/search?q=${textToSearch}`)
      .expect(200);

    expect(JSON.parse(query.text)).toEqual(songsPage);
  });
});
