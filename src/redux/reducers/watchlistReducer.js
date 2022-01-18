import { EMPTY_WATCHLISTS, GET_WATCHLISTS } from '../actions/actionTypes';

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
    default:
      return state;
  }
};

export default watchListReducer;
