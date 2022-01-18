import {
  SEARCH,
  CONTENT_CHANGE,
  SET_USER,
  UNSET_USER,
  GET_WATCHLISTS,
  EMPTY_WATCHLISTS,
} from './actionTypes';
import { getUserWatchlist, logIn } from '../../api/request';

export const searchAction = (title) => {
  return { type: SEARCH, payload: title };
};

export const contentAction = (imdbid, content) => {
  return { type: CONTENT_CHANGE, payload: { imdbid, type: content } };
};

<<<<<<< HEAD
export const setUser = (payload) => async (dispatch) => {
  let user = { googleId: payload.googleId, email: payload.email };
  await logIn(payload.googleId).then((data) => {
    console.log(data);
=======
export const setUser = (userInfo) => async (dispatch) => {
  let user = {
    googleId: userInfo.profileObj.googleId,
    email: userInfo.profileObj.email,
  };
  await logIn(userInfo.googleId).then((data) => {
>>>>>>> 8afca9d2d55a28494ee06ac173ff729de78782d9
    if (data) {
      user = data;
      console.log(user);
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

export const getWatchlist = (user) => async (dispatch) => {
  let wathcList = [];
  await getUserWatchlist(user.googleId).then((data) => {
    if (data) {
      wathcList = data;
    }
  });
  dispatch({
    type: GET_WATCHLISTS,
    payload: wathcList,
  });
};

export const emptyWatchList = () => {
  return {
    type: EMPTY_WATCHLISTS,
  };
};
