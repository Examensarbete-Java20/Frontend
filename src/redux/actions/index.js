import { SEARCH } from './actionTypes';

export const search = (title) => {
  return { type: SEARCH, payload: title };
};
