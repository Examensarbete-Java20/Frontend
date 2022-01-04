import * as request from '../../api/request';
import DesctriptionReadMore from '../DesctriptionReadMore';
import Rating from '../Rating';

export const getContent = (imdbId, type) => {
  return request.getContent(`/${type}/${imdbId}`);
};
