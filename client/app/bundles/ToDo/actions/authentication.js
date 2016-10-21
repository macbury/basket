import types from './types';
import api from '../api';
import { showFlashMessage } from './flash_messages';
/**
* Sign in user in system
*/
export const signInAction = function({ email, password }) {
  return function(dispatch) {

    api().post('/api/users/sign_in', { user: { email, password } })
      .then((response) => {
        dispatch(showFlashMessage('Signed in successfully'))
      }).catch((response) => {
        const { response: { data: { error } } } = response;
        dispatch(showFlashMessage(error));
      });
  }
}
