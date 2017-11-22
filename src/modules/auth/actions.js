export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const signupUtil = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user }
  })
);

const loginUtil = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user }
  })
);

const logoutUtil = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const login = user => dispatch => (
  loginUtil(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const signup = user => dispatch => (
  signupUtil(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const logout = () => dispatch => (
  logoutUtil()
    .then(() => dispatch(receiveCurrentUser(null)))
);