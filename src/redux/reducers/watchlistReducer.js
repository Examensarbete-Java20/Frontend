import {
  EMPTY_WATCHLISTS,
  GET_WATCHLISTS,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currentList: [],
  watchLists: [],
  invited: [],
};

const watchListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_WATCHLISTS:
      return { ...state, watchLists: action.payload };
    case EMPTY_WATCHLISTS:
      return (state = INITIAL_STATE);
    case ADD_TO_WATCHLIST:
      return state;
    case REMOVE_FROM_WATCHLIST:
      return state;
    default:
      return state;
  }
};

export default watchListReducer;
