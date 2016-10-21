import types from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case (types.SHOW_FLASH_MESSAGE):
      return [...state, action.payload];
    case (types.REMOVE_FLASH_MESSAGE):
      let newState = [...state];
      newState.shift(0);
      return newState;
    default:
      return state;
  }
}
