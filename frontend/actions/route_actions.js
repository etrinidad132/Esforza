import * as APIUtil from "../util/route_api_util";

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const DELETE_ROUTE = "DELETE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";

const receiveRoutes = (routes) => {
    return ({
        type: RECEIVE_ROUTES,
        routes: routes
    })
}

const receiveRoute = (route) => {
    return ({
        type: RECEIVE_ROUTE,
        route: route
    })
}

const deleteRoute = (routeId) => {
    return({
        type: DELETE_ROUTE,
        routeId: routeId
    })
}

const receiveErrors = (errorsArray) => {
    return ({
        type: RECEIVE_ROUTE_ERRORS,
        errors: errorsArray
    })
}

/// Thunk Actions

export const receiveRoutes = () => (dispatch) => APIUtil.receiveRoutes()
    .then(routes => dispatch(receiveRoutes(routes)), err => dispatch(receiveErrors(err.responseJSON)));

export const receiveRoute = (routeId) => (dispatch) => APIUtil.receiveRoute(routeId)
    .then(route => dispatch(receiveRoute(route)), err => dispatch(receiveErrors(err.responseJSON)));

export const createRoute = (route) => (dispatch) => APIUtil.createRoute(route)
    .then(route => dispatch(receiveRoute(route)), err => dispatch(receiveErrors(err.responseJSON)));

export const updateRoute = (route) => (dispatch) => APIUtil.updateRoute(route)
    .then(route => dispatch(receiveRoute(route)), err => dispatch(receiveErrors(err.responseJSON)));

export const deleteRoute = (routeId) => (dispatch) => APIUtil.destroyRoute(routeId)
    .then(route => dispatch(deleteRoute(route.id)), err => dispatch(receiveErrors(err.responseJSON)));