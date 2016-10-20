import { combineReducers } from 'redux';
import reducerLists from './lists';
import authenticationReducer from './authentication';
import { reducer as form } from 'redux-form';
/**
* Main app reducer
*/
const reducer = combineReducers({
  lists: reducerLists,
  authenticated: authenticationReducer,
  form: form
});

/**
* Initial todo app state
*/
const initialState = {

};

export { initialState, reducer };
