import React from "react";
import { Route } from "react-router-dom"
import NavBarContainer from "./navbar/navbar_container"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import SignupModalContainer from "./session/sign_up_modal_container"
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash"

const App = () => {
    return (
        <>
            <NavBarContainer />
            <AuthRoute exact path="/" component={Splash} />
            {/* <Route exact path="/login" component={LoginFormContainer} /> */}
            {/* <Route exact path="/signup" component={SignupFormContainer} /> */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <SignupModalContainer />

        </>
    );
}

export default App;

// import React from "react";
// import { Route } from "react-router-dom"
// import NavBarContainer from "./navbar/navbar_container"
// import LoginFormContainer from "./session/login_form_container"
// import SignupFormContainer from "./session/signup_form_container"
// import SignupModalContainer from "./session/sign_up_modal_container"
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
// import Splash from "./splash/splash"

// const App = () => {
//     return (
//         <>
//             <header className="header">
//                 <div className="container header-content">
//                     <h1 className="logo">ESFORZA</h1>
//                     <nav className="main-nav">
//                         <NavBarContainer />
//                     </nav>
//                 </div>
//             </header>
//             <Splash />



//             {/* <Route exact path="/login" component={LoginFormContainer} /> */}
//             {/* <Route exact path="/signup" component={SignupFormContainer} /> */}
//             <AuthRoute exact path="/login" component={LoginFormContainer} />
//             <AuthRoute exact path="/signup" component={SignupFormContainer} />
//             <SignupModalContainer />

//         </>
//     );
// }

// export default App;