import { RECEIVE_ROUTES, RECEIVE_ROUTE, DELETE_ROUTE } from '../actions/route_actions';

const routeReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_ROUTES:/// working on this
            return action.routes
        case RECEIVE_ROUTE:
            return Object.assign({}, state, { [action.route.id]: action.route });
        case DELETE_ROUTE:
            newState = Object.assign({}, state)
            delete newState[action.routeId]
            return newState;
        default:
            return state;
    }
};

export default routeReducer;