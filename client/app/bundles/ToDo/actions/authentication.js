import types from './types';
import api from '../api';
import { showFlashMessage } from './flash_messages';
import { browserHistory } from 'react-router';

/**
* Fetch information if user is logged in
*/
export const fetchCurrentUserAction = function() {
  return function(dispatch) {
    api().get('/api/me')
      .then((response) => {
        console.log("hello", response);
        dispatch({ type: types.CREATE_SESSION });
      }).catch((response) => {
        dispatch({ type: types.RESET_SESSION });
        browserHistory.push('/users/sign_in');
      });
  }
}

/**
* Sign in user in system
*/
export const signInAction = function({ email, password }) {
  return function(dispatch) {
    dispatch({ type: types.RESET_SESSION });
    api().post('/api/users/sign_in', { user: { email, password } })
      .then((response) => {
        dispatch(showFlashMessage('Signed in successfully'));
        dispatch({ type: types.CREATE_SESSION });
        browserHistory.push('/');
      }).catch((response) => {
        const { response: { data: { error } } } = response;
        dispatch(showFlashMessage(error));
      });
  }
}
