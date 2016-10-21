import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'CHANGE_AUTH', 'SHOW_FLASH_MESSAGE', 'REMOVE_FLASH_MESSAGE'
]);

export default actionTypes;
