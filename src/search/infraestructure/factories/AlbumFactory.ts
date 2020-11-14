import { Album } from 'src/search/domain/models/Album';
import { Artist } from 'src/search/domain/models/Artist';
import { AlbumDTO } from '../dtos/AlbumDTO';
import ArtistFactory from './ArtistFactory';

const AlbumFactory = {
  convertToModel: (albumDTO: AlbumDTO): Album => {
    const { href, id, images, name, type, uri } = albumDTO;
    const artists: Artist[] = albumDTO.artists.map((artistDTO) =>
      ArtistFactory.convertToModel(artistDTO),
    );
    return {
      albumType: albumDTO.album_type,
      artists,
      href,
      id,
      images,
      name,
      releaseDate: albumDTO.release_date,
      releaseDatePrecision: albumDTO.release_date_precision,
      totalTracks: albumDTO.total_tracks,
      type,
      uri,
    };
  },
};

export default AlbumFactory;
