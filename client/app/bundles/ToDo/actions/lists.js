import types from './types';
import api from '../api';

/**
* Fetch all lists for current user
*/
export function fetchLists(isLoggedIn) {
  return function(dispatch) {
    api().get('/api/lists')
      .then((response) => {

      }).catch((response) => {

      });
  }
}
