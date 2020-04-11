import * as APIUtil from "../util/location_util";

export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
export const RECEIVE_LOCATION_ERRORS = "REMOVE_LOCATION_ERRORS";

const receiveLocations = (locations) => ({
    type: RECEIVE_LOCATIONS,
    locations: locations
})

const receiveLocation = (location) => ({
    type: RECEIVE_LOCATION,
    location: location
})

const removeLocation = (locationId) => ({
    type: REMOVE_LOCATION,
    locationId: locationId
})

const receiveErrors = (error) => ({
    type: RECEIVE_LOCATION_ERRORS,
    error: error
})

// thunk actions

export const fetchLocations = () => (dispatch) => APIUtil.fetchLocations()
    .then((locations) => dispatch(receiveLocations(locations)), err => dispatch(receiveErrors(err.statusText)))

export const fetchLocation = (locationId) => (dispatch) => APIUtil.fetchLocation(locationId)
    .then((location) => dispatch(receiveLocation(location)), err => dispatch(receiveErrors(err.statusText)))

export const createLocation = (location) => (dispatch) => APIUtil.createLocation(location)
    .then((location) => dispatch(receiveLocation(location)), err => dispatch(receiveErrors(err.statusText)))

export const updateLocation = (location) => (dispatch) => APIUtil.updateLocation(location)
    .then((location) => dispatch(receiveLocation(location)), err => dispatch(receiveErrors(err.statusText)))

export const deleteLocation = (locationId) => (dispatch) => APIUtil.deleteLocation(locationId)
    .then((location) => dispatch(removeLocation(location)), err => dispatch(receiveErrors(err.statusText)))