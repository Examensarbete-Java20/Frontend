import {
  SEARCH,
  CONTENT_CHANGE,
  SET_USER,
  UNSET_USER,
  SET_NEW_USERNAME,
  CREATE_WATCHLIST,
  GET_WATCHLISTS,
  EMPTY_WATCHLISTS,
  UPDATE_WATCHLIST,
  GET_CURRENTLIST,
} from './actionTypes';
import {
  getUserWatchlist,
  logIn,
  createUserReqeust,
  changeUsernameRequest,
  addContentToWatchList,
  getUserSingleWatchlist,
  removeContentFromWatchList,
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

export const changeUsername = (googleId, newUsername) => async (dispatch) => {
  let changeUsername = {};
  await changeUsernameRequest(googleId, newUsername).then((data) => {
    if (data) {
      changeUsername = data;
    }
  });
  dispatch({
    type: SET_NEW_USERNAME,
    payload: changeUsername,
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

export const setCurrentWatchList = (currentWatchList) => {
  return {
    type: GET_CURRENTLIST,
    payload: currentWatchList,
  };
};

export const getSingleWatchlist = (id) => async (dispatch) => {
  let wathcList = {};
  await getUserSingleWatchlist(id).then((data) => {
    if (data) {
      wathcList = data;
    }
  });
  dispatch({
    type: GET_CURRENTLIST,
    payload: wathcList,
  });
};

export const removeFromWatchList = (listId, content) => async (dispatch) => {
  let updateWatchList = {};
  console.log(content);
  await removeContentFromWatchList(listId, content).then((data) => {
    if (data) {
      updateWatchList = data;
    }
  });
  dispatch({
    type: UPDATE_WATCHLIST,
    payload: updateWatchList,
  });
};

export const emptyWatchList = () => {
  return {
    type: EMPTY_WATCHLISTS,
  };
};

export const addToWatchList =
  (type, watchListId, content) => async (dispatch) => {
    let updateWatchList = {};
    await addContentToWatchList(type, watchListId, content).then((data) => {
      if (data) {
        updateWatchList = data;
      }
    });
    dispatch({
      type: UPDATE_WATCHLIST,
      payload: updateWatchList,
    });
  };
