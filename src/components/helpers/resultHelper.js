import * as request from '../../api/request';

export const searchResult = (title) => {
  if (title) {
    return request.searchResult(title);
  }
};
