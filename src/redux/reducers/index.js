import { combineReducers } from 'redux';
import authReducer from './authReducer';
import contentReducer from './contentReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  searchTerm: searchReducer,
  content: contentReducer,
  auth: authReducer,
});
