import { Song } from 'src/search/domain/models/Song';
import { Artist } from 'src/search/domain/models/Artist';
import { SongDTO } from '../dtos/SongDTO';
import ArtistFactory from './ArtistFactory';
import AlbumFactory from './AlbumFactory';
import { Album } from 'src/search/domain/models/Album';

const SongFactory = {
  convertToModel: (songDTO: SongDTO): Song => {
    const { href, id, explicit, name, type, uri } = songDTO;
    const artists: Artist[] = songDTO.artists.map((artistDTO) =>
      ArtistFactory.convertToModel(artistDTO),
    );
    const album: Album = AlbumFactory.convertToModel(songDTO.album);
    return {
      id,
      name,
      album,
      artists,
      discNumber: songDTO.disc_number,
      durationMs: songDTO.duration_ms,
      explicit,
      href,
      isLocal: songDTO.is_local,
      previewUrl: songDTO.preview_url,
      trackNumber: songDTO.track_number,
      type,
      uri,
    };
  },
};

export default SongFactory;
