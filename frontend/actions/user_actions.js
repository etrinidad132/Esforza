import * as APIUtil from "../util/user_util"
import { receiveCurrentUser, receiveErrors } from "../actions/session_actions"

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUsers = (users) => {
    return ({
        type: RECEIVE_USERS,
        users: users
    })
}

const receiveUser = (user) => {
    return ({
        type: RECEIVE_USER,
        user: user
    })
}

// const receiveErrors = (errors) => ({
//     type: RECEIVE_USER_ERRORS,
//     errors: errors
// });

/// Thunk Actions

export const fetchUsers = () => (dispatch) => APIUtil.fetchUsers()
    .then((users) => dispatch(receiveUsers(users)), (err) => dispatch(receiveErrors(err.responseJSON)))

export const fetchUser = (userId) => (dispatch) => APIUtil.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)), (err) => dispatch(receiveErrors(err.responseJSON)))

export const updateUser = (user) => (dispatch) => APIUtil.updateUser(user)
    .then((user) => dispatch(receiveUser(user)), err => dispatch(receiveErrors(err.responseJSON)))