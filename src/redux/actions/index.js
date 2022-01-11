import { SEARCH, CONTENT_CHANGE, SIGN_IN, SIGN_OUT } from './actionTypes';

export const searchAction = (title) => {
  return { type: SEARCH, payload: title };
};

export const contentAction = (imdbid, content) => {
  return { type: CONTENT_CHANGE, payload: { imdbid, type: content } };
};

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
