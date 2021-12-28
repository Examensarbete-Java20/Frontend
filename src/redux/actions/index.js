import { SEARCH, CONTENT_CHANGE } from './actionTypes';

export const searchAction = (title) => {
  return { type: SEARCH, payload: title };
};

export const contentAction = (imdbid, content) => {
  return { type: CONTENT_CHANGE, payload: { imdbid, type: content } };
};
