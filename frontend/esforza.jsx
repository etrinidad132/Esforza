import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"
import * as APIUtil from "./util/session_api_util"
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore()
    ///////////////////////////////////////////////////
    window.getState = store.getState()
    window.store = store;
    window.login = APIUtil.login;
    window.signup = APIUtil.signup;
    window.logout = APIUtil.logout;
    ///////////////////////////////////////////////////
    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>, root)
})