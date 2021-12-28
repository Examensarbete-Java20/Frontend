import { combineReducers } from 'redux';
import contentReducer from './contentReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  searchTerm: searchReducer,
  content: contentReducer,
});
