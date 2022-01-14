import { SEARCH } from '../actions/actionTypes';

const INTIAL_STATE = null;

const searchReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;

    default:
      return state;
  }
};

export default searchReducer;
