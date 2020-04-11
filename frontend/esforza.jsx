import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"

///////////////////////////////////////////////////////////////////
import * as SessionUtil from "./util/session_api_util"
import * as UserUtil from "./util/user_util"
import * as RouteUtil from "./util/route_api_util"
import { openModal, closeModal } from "./actions/modal_actions"
import { fetchRoutes, fetchRoute, createRoute, updateRoute, destroyRoute } from "./actions/route_actions";
import { fetchLocations, fetchLocation, createLocation, updateLocation, deleteLocation } from "./actions/location_actions";
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
    window.updateUser = UserUtil.updateUser;
    // window.openModal = (modalType) => store.dispatch(openModal(modalType));
    // window.closeModal = () => store.dispatch(closeModal());
    window.fetchRoutes = () => store.dispatch(fetchRoutes());
    window.fetchRoute = (routeId) => store.dispatch(fetchRoute(routeId));
    window.createRoute = (route) => store.dispatch(createRoute(route));
    window.updateRoute = (route) => store.dispatch(updateRoute(route));
    window.destroyRoute = (routeId) => store.dispatch(destroyRoute(routeId));

    window.fetchLocations = () => store.dispatch(fetchLocations());
    window.fetchLocation = (locationId) => store.dispatch(fetchLocation(locationId));
    window.createLocation = (location) => store.dispatch(createLocation(location));
    window.updateLocation = (location) => store.dispatch(updateLocation(location));
    window.deleteLocation = (locationId) => store.dispatch(deleteLocation(locationId));
    


    // window.receiveRoutes = RouteUtil.receiveRoutes();
    // window.receiveRoute = RouteUtil.receiveRoute;
    // window.createRoute = RouteUtil.createRoute;
    // window.updateRoute = RouteUtil.updateRoute;
    // window.destroyRoute = RouteUtil.destroyRoute;
    ///////////////////////////////////////////////////

    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store} />, root)
})