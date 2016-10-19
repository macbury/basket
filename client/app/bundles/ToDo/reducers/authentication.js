import types from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case (types.CHANGE_AUTH):
      return action.payload;
    default:
      return state;
  }
}
