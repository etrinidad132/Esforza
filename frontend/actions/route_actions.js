
import * as APIUtil from "../util/route_api_util";

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const DELETE_ROUTE = "DELETE_ROUTE";
export const RECEIVE_ROUTE_ERROR = "RECEIVE_ROUTE_ERROR";
export const RECEIVE_ROUTE_CRUD_ERRORS = "RECEIVE_ROUTE_CRUD_ERRORS";

const receiveRoutes = (routes) => {
    return ({
        type: RECEIVE_ROUTES,
        routes: routes
    })
}

const receiveRoute = (route) => {
    // debugger
    if (route instanceof Array) {
        return ({
            type: RECEIVE_ROUTE_CRUD_ERRORS,
            errors: route
        })
    } else {
        return ({
            type: RECEIVE_ROUTE,
            route: route
        })
    }
}

const deleteRoute = (routeId) => {
    // debugger
    return ({
        type: DELETE_ROUTE,
        routeId: routeId
    })
}

const receiveErrors = (error) => {
    // debugger
    return ({
        type: RECEIVE_ROUTE_ERROR,
        error: error
    })
}
const receiveCrudErrors = (errorsArray) => {
    // debugger
    return ({
        type: RECEIVE_ROUTE_CRUD_ERRORS,
        errors: errorsArray
    })
}

/// Thunk Actions

export const fetchRoutes = () => (dispatch) => APIUtil.receiveRoutes()
    .then(routes => dispatch(receiveRoutes(routes)), err => dispatch(receiveErrors(err.statusText)));

export const fetchRoute = (routeId) => (dispatch) => APIUtil.receiveRoute(routeId)
    .then(route => dispatch(receiveRoute(route)), err => dispatch(receiveErrors(err.statusText)));

export const createRoute = (route) => (dispatch) => APIUtil.createRoute(route)
    .then(route => dispatch(receiveRoute(route)), err => dispatch(receiveErrors(err.statusText)));

export const updateRoute = (route) => (dispatch) => APIUtil.updateRoute(route)
    .then(route => dispatch(receiveRoute(route)), err => dispatch(receiveErrors(err.statusText)));

export const destroyRoute = (routeId) => (dispatch) => APIUtil.destroyRoute(routeId)
    .then(route => dispatch(deleteRoute(route.id)), err => dispatch(receiveErrors(err.statusText)));

// destroyRoute debugging

// export const destroyRoute = (routeId) => (dispatch) => {
//     debugger
//     return (APIUtil.destroyRoute(routeId)).then(route =>{
//         debugger
//         return(dispatch.deleteRoute(route.id))
//     })
// }

// Error debugging

// export const createRoute = (route) => (dispatch) => APIUtil.createRoute(route)
//     .then((route) => {
//         debugger
//         return dispatch(receiveRoute(route))
//     },

//         (err) => {
//             // debugger
//             return dispatch(receiveErrors(err.statusText));
//         })

// export const fetchRoute = (routeId) => (dispatch) => APIUtil.receiveRoute(routeId)
//     .then(route => dispatch(receiveRoute(route)),
//         (err) => {
//             debugger
//            return dispatch(receiveErrors(err.statusText));
//     }) 