import types from './types';
import api from '../api';

/**
* Sign in user in system
*/
export const signInAction = function({ email, password }) {
  console.log("Action!");
  return function(dispatch) {
    api.post('/api/users/sign_in', { user: { email, password } })
  }
}
