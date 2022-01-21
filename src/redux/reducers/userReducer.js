import { SET_USER, UNSET_USER, SET_NEW_USERNAME } from '../actions/actionTypes';

const INITIAL_STATE = {
  user: {
    email: null,
    googleId: null,
    imageUrl: null,
    name: null,
  },
  isLoggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload, isLoggedIn: true };
    case UNSET_USER:
      return (state = INITIAL_STATE);
    case SET_NEW_USERNAME:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
