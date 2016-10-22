import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'CREATE_SESSION', 'RESET_SESSION', 'SHOW_FLASH_MESSAGE', 'REMOVE_FLASH_MESSAGE', 'FETCH_LISTS'
]);

export default actionTypes;
