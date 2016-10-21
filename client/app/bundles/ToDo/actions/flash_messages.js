import types from './types';

/**
* Add message to queue of messages to show
*/
export const showFlashMessage = function(content) {
  return { type: types.SHOW_FLASH_MESSAGE, payload: content };
}

/**
* Hide current visible flash message
*/
export const hideFlashMessage = function() {
  return { type: types.REMOVE_FLASH_MESSAGE };
}
