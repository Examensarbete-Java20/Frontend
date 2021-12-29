import { SEARCH } from '../actions/actionTypes';

const INTIAL_STATE = null;

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;

    default:
      return state;
  }
};
