import types from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case (types.CREATE_SESSION):
      return true;
    case (types.RESET_SESSION):
      return null;
    default:
      return state;
  }
}
