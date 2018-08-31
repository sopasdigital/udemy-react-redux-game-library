export function selectGame(game) {

  //  Returns an action that has 2 values
  //  'type' and 'payload'
  //  'type' describes the purpose of the action
  //  Normally written in all caps and pulled from
  //  a separate list
  //  'payload' gives further details re: action
  return {
    type: 'GAME_SELECTED',
    payload: game
  };
}
