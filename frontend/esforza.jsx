import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"
import * as APIUtil from "./util/session_api_util"
///////////////////////////////////////////////////////////////////

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
    window.login = APIUtil.login;
    window.signup = APIUtil.signup;
    window.logout = APIUtil.logout;
    ///////////////////////////////////////////////////

    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store} />, root)
})