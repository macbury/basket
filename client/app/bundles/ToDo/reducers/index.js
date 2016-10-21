import { combineReducers } from 'redux';
import reducerLists from './lists';
import reducerFlashMessages from './flash_messages';
import authenticationReducer from './authentication';
import { reducer as form } from 'redux-form';
/**
* Main app reducer
*/
const reducer = combineReducers({
  lists: reducerLists,
  authenticated: authenticationReducer,
  form: form,
  flashes: reducerFlashMessages
});

/**
* Initial todo app state
*/
const initialState = {
  flashes: []
};

export { initialState, reducer };
