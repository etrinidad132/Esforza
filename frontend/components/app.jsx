import React from "react";
import { Route } from "react-router-dom"
import NavBarContainer from "./navbar/navbar_container"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import SignupModalContainer from "./session/sign_up_modal_container"
// import AuthRoute from "../util/route_util";
import { AuthRoute } from "../util/route_util";

const App = () => {
    return (
        <div>
            <header>
                <h1>Esforza!!</h1>
            </header>
            <NavBarContainer />
            {/* <Route exact path="/login" component={LoginFormContainer} /> */}
            {/* <Route exact path="/signup" component={SignupFormContainer} /> */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <SignupModalContainer />

        </div>
    );
}

export default App;