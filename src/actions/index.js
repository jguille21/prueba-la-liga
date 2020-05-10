const getUsers = () => ({
  type: 'GET_USERS',
});

const getLogin = userData => ({
  type: 'GET_LOGIN',
  userData
});

const doLogout = () => ({
  type: 'DO_LOGOUT',
});

const persistLogin = () => ({
  type: 'PERSIST_LOGIN',
});

const putUpdate = userData => ({
  type: 'PUT_UPDATE',
  userData
});

const updatePutted = () => ({
  type: 'UPDATE_PUTTED',
});

const putDelete = userData => ({
  type: 'PUT_DELETE',
  userData
});

export {
  getUsers,
  getLogin,
  doLogout,
  persistLogin,
  putUpdate,
  updatePutted,
  putDelete
}