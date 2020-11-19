import { Page } from '../../domain/models/Page';
import { PageDTO } from '../dtos/PageDTO';
import SongFactory from './SongFactory';

const PageFactory = {
  convertToModel: (pageDTO: PageDTO): Page => {
    const { href, limit, next, offset, previous, total } = pageDTO;
    const items = pageDTO.items.map((songDTO) =>
      SongFactory.convertToModel(songDTO),
    );
    return new Page(href, items, limit, next, offset, previous, total);
  },
};

export default PageFactory;
