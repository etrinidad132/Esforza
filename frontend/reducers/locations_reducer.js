import { RECEIVE_LOCATIONS, RECEIVE_LOCATION, REMOVE_LOCATION, REMOVE_LOCATIONS } from "../actions/location_actions";

const locationsReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    let newState = {};
    switch (action.type) {
        case RECEIVE_LOCATIONS:
            return action.locations;
        case RECEIVE_LOCATION:
            return Object.assign({}, state, { [action.location.id]: action.location });
        case REMOVE_LOCATION:
            // debugger
            newState = Object.assign({}, state);
            delete newState[action.locationId]
            return newState;
        case REMOVE_LOCATIONS:
            newState = Object.assign({}, state);
            action.locationIds.forEach(id => {
                delete newState[id]
            })
            return newState;
        default:
            return state;
    }
}

export default locationsReducer;