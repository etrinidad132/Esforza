import * as APIUtil from "../util/user_util"
import { receiveCurrentUser, receiveErrors } from "../actions/session_actions"

/// Thunk Actions

export const updateUser = (user) => (dispatch) => APIUtil.updateUser(user)
    .then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)));