import { SEARCH, CONTENT_CHANGE, SET_USER, UNSET_USER } from './actionTypes';
import { logIn } from '../../api/request';

export const searchAction = (title) => {
  return { type: SEARCH, payload: title };
};

export const contentAction = (imdbid, content) => {
  return { type: CONTENT_CHANGE, payload: { imdbid, type: content } };
};

export const setUser = (payload) => async (dispatch) => {
  let user = { googleId: payload.googleId, email: payload.email };
  await logIn(payload.googleId).then((data) => {
    if (data) {
      user = data;
    }
  });
  dispatch({
    type: SET_USER,
    payload: user,
  });
};

export const unsetUser = () => {
  return {
    type: UNSET_USER,
  };
};
