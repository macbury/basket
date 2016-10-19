import { combineReducers } from 'redux';
import reducerLists from './lists';
import authenticationReducer from './authentication';
/**
* Main app reducer
*/
const reducer = combineReducers({
  lists: reducerLists,
  authenticated: authenticationReducer
});

/**
* Initial todo app state
*/
const initialState = {

};

export { initialState, reducer };
