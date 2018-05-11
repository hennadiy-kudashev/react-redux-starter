import { combineReducers } from 'redux';
import initialState from 'store/initialState';

export default combineReducers({
  currentUser: (state = initialState.currentUser) => state
});
