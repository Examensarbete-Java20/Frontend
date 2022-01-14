import { SET_USER, UNSET_USER } from '../actions/actionTypes';

const INITIAL_STATE = {
  user: {
    email: null,
    familyName: null,
    givenName: null,
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
    default:
      return state;
  }
};

export default userReducer;
