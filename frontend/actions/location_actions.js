import * as APIUtil from "../util/location_util";

export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";
export const RECEIVE_LOCATION_ERRORS = "RECEIVE_LOCATION_ERRORS";
export const REMOVE_LOCATIONS = "REMOVE_LOCATIONS";

const receiveLocations = (locations) => ({
    type: RECEIVE_LOCATIONS,
    locations: locations
})

const receiveLocation = (location) => ({
    type: RECEIVE_LOCATION,
    location: location
})

// const removeLocation = (locationId) => ({
//     type: REMOVE_LOCATION,
//     locationId: locationId
// })

const removeLocation = (locationId) => {
    // debugger
    return ({
        type: REMOVE_LOCATION,
        locationId: locationId
    })
}

const receiveErrors = (error) => ({
    type: RECEIVE_LOCATION_ERRORS,
    error: error
})

const removeLocations = (locationIdsArray) => {
    return ({
        type: REMOVE_LOCATIONS,
        locationIds: locationIdsArray
    })
}

// thunk actions

export const fetchLocations = () => (dispatch) => APIUtil.fetchLocations()
    .then((locations) => dispatch(receiveLocations(locations)), err => dispatch(receiveErrors(err.statusText)))

export const fetchLocation = (locationId) => (dispatch) => APIUtil.fetchLocation(locationId)
    .then((location) => dispatch(receiveLocation(location)), err => dispatch(receiveErrors(err.statusText)))

export const createLocation = (location) => (dispatch) => APIUtil.createLocation(location)
    .then((location) => dispatch(receiveLocation(location)), err => dispatch(receiveErrors(err.statusText)))

export const updateLocation = (location) => (dispatch) => APIUtil.updateLocation(location)
    .then((location) => dispatch(receiveLocation(location)), err => dispatch(receiveErrors(err.statusText)))

// export const deleteLocation = (locationId) => (dispatch) => APIUtil.deleteLocation(locationId)
//     .then((location) => dispatch(removeLocation(location.id)), err => dispatch(receiveErrors(err.responseJSON)))
//     // .then((location) => dispatch(removeLocation(location)), err => dispatch(receiveErrors(err.statusText)))

export const deleteLocation = (locationId) => (dispatch) => {
    // debugger
    return (APIUtil.deleteLocation(locationId).then((location) =>{
        // debugger
        dispatch(removeLocation(location.id))
    }), (err) => {
        // debugger
        dispatch(receiveErrors(err.statusText))
    })
}

export const deleteLocations = (locationIds) => (dispatch) => {
    // debugger
    return (APIUtil.deleteLocations(locationIds).then((locationIdsArray) =>{
        // debugger
        dispatch(removeLocations(locationIdsArray))
    }), (err) => {
        // debugger
        dispatch(receiveErrors(err.statusText))
    })
}