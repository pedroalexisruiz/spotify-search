import { Image } from '../../domain/models/Image';
import { Album } from '../../domain/models/Album';
import { Artist } from '../../domain/models/Artist';
import { AlbumDTO } from '../dtos/AlbumDTO';
import { ImageDTO } from '../dtos/ImageDTO';
import ArtistFactory from './ArtistFactory';

const AlbumFactory = {
  convertToModel: (albumDTO: AlbumDTO): Album => {
    const {
      album_type,
      href,
      id,
      name,
      release_date,
      release_date_precision,
      total_tracks,
      type,
      uri,
    } = albumDTO;
    const artists: Artist[] = albumDTO.artists.map((artistDTO) =>
      ArtistFactory.convertToModel(artistDTO),
    );
    const images = albumDTO.images.map(
      (imageDTO: ImageDTO) =>
        new Image(imageDTO.height, imageDTO.url, imageDTO.width),
    );
    return new Album(
      album_type,
      artists,
      href,
      id,
      images,
      name,
      release_date,
      release_date_precision,
      total_tracks,
      type,
      uri,
    );
  },
};

export default AlbumFactory;
