import * as request from '../../api/request';

export const getTitles = (content, title) => {
  return request.search(content, title);
};
