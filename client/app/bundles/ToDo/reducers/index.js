import { combineReducers } from 'redux';
import reducerLists from './reducer_lists';

/**
* Main app reducer
*/
const reducer = combineReducers({
  lists: reducerLists
});

/**
* Initial todo app state
*/
const initialState = {

};

export { initialState, reducer };
