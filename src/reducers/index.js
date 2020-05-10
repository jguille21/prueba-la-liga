const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USERS':
    case 'GET_LOGIN':
    case 'PUT_UPDATE':
    case 'PUT_DELETE':
      return { ...state, loading: true };
    case 'USERS_RECEIVED':
      return { ...state, users: action.json.data, loading: false };
    case 'LOGIN_RECEIVED':
      return { ...state, loggedIn: action.json.token, loading: false };
    case 'UPDATE_PUTTED':
    case 'DELETE_PUTTED':
      return { ...state, loading: false };
    case 'DO_LOGOUT':
      return { ...state, loggedIn: false };
    case 'PERSIST_LOGIN':
      return { ...state, loggedIn: true };

    default:
      return state;
  }
};
export default reducer;