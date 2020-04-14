import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import routeReducer from "./route_reducer"
import locationsReducer from "./locations_reducer";

export default combineReducers({
    users: usersReducer,
    routes: routeReducer,
    locations: locationsReducer
})