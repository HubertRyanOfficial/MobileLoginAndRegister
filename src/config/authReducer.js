const initialState = false;

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER_STATE':
      return action.playload;
    default:
      return state;
  }
}
