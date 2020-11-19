import { Song } from '../../domain/models/Song';
import { Artist } from '../../domain/models/Artist';
import { SongDTO } from '../dtos/SongDTO';
import ArtistFactory from './ArtistFactory';
import AlbumFactory from './AlbumFactory';
import { Album } from '../../domain/models/Album';

const SongFactory = {
  convertToModel: (songDTO: SongDTO): Song => {
    const {
      href,
      id,
      explicit,
      name,
      type,
      uri,
      disc_number,
      duration_ms,
      is_local,
      preview_url,
      track_number,
    } = songDTO;
    const artists: Artist[] = songDTO.artists.map((artistDTO) =>
      ArtistFactory.convertToModel(artistDTO),
    );
    const album: Album = AlbumFactory.convertToModel(songDTO.album);
    return new Song(
      id,
      name,
      album,
      artists,
      disc_number,
      duration_ms,
      explicit,
      href,
      is_local,
      preview_url,
      track_number,
      type,
      uri,
    );
  },
};

export default SongFactory;
