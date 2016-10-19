import types from './types';

/**
* Just tell app is user authenticated or not
*/
export function authenticate(isLoggedIn) {
  return {
    type: types.CHANGE_AUTH,
    payload: isLoggedIn
  }
}
