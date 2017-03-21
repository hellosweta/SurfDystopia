import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const signUp = user => dispatch => (
  APIUtil.signUp(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)),
      error => dispatch(receiveErrors(error.responseJSON)))
);

export const logIn = user => dispatch => (
  APIUtil.logIn(user)
    .then(returningUser => dispatch(receiveCurrentUser(returningUser)),
      error => dispatch(receiveErrors(error.responseJSON)))
);

export const demo = () => dispatch => {
  APIUtil.demo()
    .then(returningUser => dispatch(receiveCurrentUser(returningUser)),
      error => dispatch(receiveErrors(error.responseJSON)));
};

export const logOut = () => dispatch => (
  APIUtil.logOut().then(user => dispatch(receiveCurrentUser(null)))
);


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS

});
