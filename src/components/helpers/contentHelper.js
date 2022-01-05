import * as request from '../../api/request';
import DesctriptionReadMore from '../DesctriptionReadMore';
import Rating from '../Rating';

export const getContent = (imdbId, type) => {
  return request.getContent(`/${type}/${imdbId}`);
};

<<<<<<< HEAD
export const renderContent = (content) => {
  console.log(content);
  return <div className='test'>HEEEj</div>;
};

=======
>>>>>>> fe66605ae5eedf1ef580770f61e9f37cea31d0e5
export const getTopTen = (type) => {
  return request.getContent(`/${type}/topTen`)
}
