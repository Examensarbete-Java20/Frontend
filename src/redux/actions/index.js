import { SEARCH, CONTENT_CHANGE, SET_USER, UNSET_USER } from './actionTypes';

export const searchAction = (title) => {
  return { type: SEARCH, payload: title };
};

export const contentAction = (imdbid, content) => {
  return { type: CONTENT_CHANGE, payload: { imdbid, type: content } };
};

export const setUser = (payload) => {
  return {
    type: SET_USER, payload
  };
};

export const unsetUser = () => {
  return {
    type: UNSET_USER
  };
};
