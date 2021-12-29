import { CONTENT_CHANGE } from '../actions/actionTypes';

const INTIAL_STATE = { type: null, imdbid: null };

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CONTENT_CHANGE:
      return action.payload;

    default:
      return state;
  }
};
