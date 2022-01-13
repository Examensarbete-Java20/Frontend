import { combineReducers } from 'redux';

import contentReducer from './contentReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';

export default combineReducers({
  searchTerm: searchReducer,
  content: contentReducer,
  user: userReducer,
});
