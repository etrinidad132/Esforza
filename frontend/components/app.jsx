import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "./splash/splash";
import NavBarContainer from "./navbar/navbar_container";
import DashboardContainer from "./dashboard/dashboard_container"
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SignupModalContainer from "./session/sign_up_modal_container";
import RouteIndexContainer from "./routes/route_index_container";
import RouteNewContainer from "./routes/route_new_container";
import RouteEditContainer from "./routes/route_edit_container";
import RouteShowContainer from "./routes/route_show_container"
import WorkoutNewContainer from "./workout/workout_new_container";
import WorkoutShowContainer from "./workout/workout_show_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
// import Modal from "./modal/modal";

const App = () => {
    return (
        <>
            <NavBarContainer />
            <Switch>
                <AuthRoute exact path="/" component={Splash} />
                <ProtectedRoute path="/dashboard" component={DashboardContainer} />
                <ProtectedRoute path="/routes/edit/:routeId" component={RouteEditContainer} />
                <ProtectedRoute path="/routes/new" component={RouteNewContainer} />
                <ProtectedRoute path="/routes/:routeId" component={RouteShowContainer} />
                <ProtectedRoute path="/routes" component={RouteIndexContainer} />
                <ProtectedRoute path="/routes" component={RouteIndexContainer} />
                <ProtectedRoute path="/training/new" component={WorkoutNewContainer} />
                <ProtectedRoute path="/training/:workoutId" component={WorkoutShowContainer} />

                <AuthRoute path="/login" component={LoginFormContainer} />
                {/* <Route exact path="/login" component={LoginFormContainer} /> */}
                <AuthRoute path="/signup" component={SignupFormContainer} />
                {/* <Route exact path="/signup" component={SignupFormContainer} /> */}
            </Switch>
                <SignupModalContainer />
                {/* <Modal /> */}

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