import * as APIUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user: user
    })
}

export const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    })
}

export const receiveErrors = (errorsArray) => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors: errorsArray
    })
}

/// Thunk Actions

export const signup = (user) => (dispatch) => APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)));

export const login = (user) => (dispatch) => APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)));

export const logout = () => (dispatch) => APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));