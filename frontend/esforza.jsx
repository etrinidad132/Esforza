import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"

///////////////////////////////////////////////////////////////////
import * as SessionUtil from "./util/session_api_util"
import * as UserUtil from "./util/user_util"
import { openModal, closeModal } from "./actions/modal_actions"
///////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ///////////////////////////////////////////////////
    window.getState = store.getState()
    window.dispatch = store.dispatch
    window.store = store;
    window.login = SessionUtil.login;
    window.signup = SessionUtil.signup;
    window.logout = SessionUtil.logout;
    window.updateUser = UserUtil.updateUser
    window.openModal = (modalType) => store.dispatch(openModal(modalType))
    window.closeModal = () => store.dispatch(closeModal())
    ///////////////////////////////////////////////////

    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store} />, root)
})