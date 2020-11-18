import { Artist } from '../../domain/models/Artist';
import { ArtistDTO } from '../dtos/ArtistDTO';

const ArtistFactory = {
  convertToModel: (artistDTO: ArtistDTO): Artist => {
    const { href, id, name, type, uri } = artistDTO;
    return {
      href,
      id,
      name,
      type,
      uri,
    };
  },
};

export default ArtistFactory;
