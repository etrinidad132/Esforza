import React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const Protected = ({ loggedIn, path, component: Component }) => {
    return (
        <Route
            path={path}
            render={(props) => {
                return (
                    loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
                )
            }} />
    )
}

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps
    )(Protected)
);