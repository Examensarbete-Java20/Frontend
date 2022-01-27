import {
  CREATE_WATCHLIST,
  EMPTY_WATCHLISTS,
  GET_WATCHLISTS,
  UPDATE_WATCHLIST,
  GET_CURRENTLIST,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currentList: null,
  watchLists: [],
  invited: [],
};

const watchListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_WATCHLIST:
      return { ...state, watchLists: [...state.watchLists, action.payload] };

    case GET_WATCHLISTS:
      return { ...state, watchLists: action.payload };

    case EMPTY_WATCHLISTS:
      return INITIAL_STATE;

    case GET_CURRENTLIST:
      return { ...state, currentList: action.payload };

    case UPDATE_WATCHLIST:
      let newWatchList = state.watchLists;
      for (let i = 0; i < newWatchList.length; i++) {
        if (newWatchList[i].id === action.payload.id) {
          newWatchList.splice(i, 1);
        }
      }
      if (action.payload.id) newWatchList.push(action.payload);
      return {
        ...state,
        watchLists: [...newWatchList],
        currentList:
          state.currentList && state.currentList.id === action.payload.id
            ? action.payload
            : state.currentList,
      };
    default:
      return state;
  }
};

export default watchListReducer;
