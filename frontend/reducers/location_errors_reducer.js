import { RECEIVE_LOCATION_ERRORS, RECEIVE_LOCATIONS, RECEIVE_LOCATION, REMOVE_LOCATION } from '../actions/location_actions';

const locationErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_LOCATION_ERRORS:
            return action.errors;
        case RECEIVE_LOCATIONS:
            return [];
        case RECEIVE_LOCATION:
            return [];
        case REMOVE_LOCATION:
            return [];
        default:
            return state;
    }
}



export default locationErrorsReducer;