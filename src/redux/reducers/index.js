import { combineReducers } from 'redux';

import contentReducer from './contentReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';
import watchListReducer from './watchlistReducer';

export default combineReducers({
  searchTerm: searchReducer,
  content: contentReducer,
  user: userReducer,
  watchList: watchListReducer,
});
