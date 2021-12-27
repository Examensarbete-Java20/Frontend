import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
  searchTerm: searchReducer,
});
