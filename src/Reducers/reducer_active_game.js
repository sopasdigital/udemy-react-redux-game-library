//  The 'state' arg pertains to only the
//  state this reducer is tackling, not
//  the application state
//  Set default state to 'null'
export default function(state = null, action) {
  //  If the action passed onto this reducer
  //  is something it's looking out for
  switch(action.type) {
    //  Return the 'payload'
    case 'GAME_SELECTED':
      return action.payload;
  }

  //  Else return it's current state
  return state;
}
