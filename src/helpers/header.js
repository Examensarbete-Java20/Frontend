import * as request from '../api/request';

export const getTitles = (title, content) => {
  return request.search(title, content);
};
