import {
  SEARCH,
  CONTENT_CHANGE,
  SET_USER,
  UNSET_USER,
  CREATE_WATCHLIST,
  GET_WATCHLISTS,
  EMPTY_WATCHLISTS,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from './actionTypes';
import {
  getUserWatchlist,
  logIn,
  createUserReqeust,
  addContentToWatchList,
  removeFromWatchList,
  createWatchListReqeust,
} from '../../api/request';

export const searchAction = (title) => {
  return { type: SEARCH, payload: title };
};

export const contentAction = (imdbid, content) => {
  return { type: CONTENT_CHANGE, payload: { imdbid, type: content } };
};

export const setUser = (userInfo) => async (dispatch) => {
  let user = {
    googleId: userInfo.profileObj.googleId,
    email: userInfo.profileObj.email,
  };
  await logIn(userInfo.googleId).then((data) => {
    if (data) {
      user = data;
    }
  });
  dispatch({
    type: SET_USER,
    payload: user,
  });
};

export const createUser = (user) => async (dispatch) => {
  let newUser = {};
  await createUserReqeust(user).then((data) => {
    if (data) {
      newUser = data;
    }
  });
  dispatch({
    type: SET_USER,
    payload: newUser,
  });
};

export const unsetUser = () => {
  return {
    type: UNSET_USER,
  };
};

export const createWatchList = (watchList) => async (dispatch) => {
  let newWatchList = {};
  await createWatchListReqeust(watchList).then((data) => {
    if (data) {
      newWatchList = data;
    }
  });
  dispatch({
    type: CREATE_WATCHLIST,
    payload: newWatchList,
  });
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

/* export const addToWatchList = (content) => async (dispatch) => {
  await addContentToWatchList(content);
  return {
    type: ADD_TO_WATCHLIST,
  };
};

export const removeFromWatchList = (content) => async (dispatch) => {
  await removeFromWatchList(content);
  return {
    type: REMOVE_FROM_WATCHLIST,
  };
}; */
