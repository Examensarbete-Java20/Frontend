import { SET_USER, UNSET_USER, SET_NEW_USERNAME } from '../actions/actionTypes';

const INITIAL_STATE = {
  user: {
    email: null,
    googleId: null,
    imageUrl: null,
    name: null,
  },
  token: localStorage.getItem('token'),
  isLoggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case UNSET_USER:
      localStorage.removeItem('token');
      return (state = INITIAL_STATE);
    case SET_NEW_USERNAME:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
