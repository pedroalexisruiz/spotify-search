import { Page } from 'src/search/domain/models/Page';
import { PageDTO } from '../dtos/PageDTO';
import SongFactory from './SongFactory';

const PageFactory = {
  convertToModel: (pageDTO: PageDTO): Page => {
    return {
      ...pageDTO,
      items: pageDTO.items.map((songDTO) =>
        SongFactory.convertToModel(songDTO),
      ),
    };
  },
};

export default PageFactory;
