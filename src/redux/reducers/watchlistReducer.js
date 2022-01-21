import {
  CREATE_WATCHLIST,
  EMPTY_WATCHLISTS,
  GET_WATCHLISTS,
  ADD_TO_WATCHLIST,
  GET_CURRENTLIST,
  REMOVE_FROM_WATCHLIST,
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

    case ADD_TO_WATCHLIST:
      return state;

    case GET_CURRENTLIST:
      console.log(action.payload);
      return { ...state, currentList: action.payload };

    case REMOVE_FROM_WATCHLIST:
      let newWatchList = state.watchLists;
      newWatchList.map((watchList, index) => {
        if (watchList.id === action.payload.id) {
          newWatchList.splice(index, 1);
        }
      });
      newWatchList.push(action.payload);
      return {
        ...state,
        watchLists: [...newWatchList],
        currentList: action.payload,
      };
    default:
      return state;
  }
};

export default watchListReducer;
