import { RECEIVE_ROUTE_ERROR, RECEIVE_ROUTE } from '../actions/route_actions';
// import { RECEIVE_ROUTE_ERROR, RECEIVE_ROUTE_CRUD_ERRORS, RECEIVE_ROUTE } from '../actions/route_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';
const routeErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    // debugger
    let newState = Array.from(state);
    switch (action.type) {
        // case RECEIVE_ROUTE_CRUD_ERRORS:
        //     return action.errors
        case RECEIVE_ROUTE_ERROR:
            newState.push(action.error)
            return newState;
        case RECEIVE_ROUTE:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}



export default routeErrorsReducer;