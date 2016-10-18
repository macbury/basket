import { combineReducers } from 'redux';
import reducerLists from './reducer_lists';

export default combineReducers({
  lists: reducerLists
});
