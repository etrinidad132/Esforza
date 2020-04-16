export const fetchLocations = () => {
    return ($.ajax({
        method: "GET",
        url: `api/locations/`
    }))
}

export const fetchLocation = (locationId) => {
    return ($.ajax({
        method: "GET",
        url: `api/locations/${locationId}`
    }))
}

export const createLocation = (location) => {
    return ($.ajax({
        method: "POST",
        url: `api/locations/`,
        data: { location }
    }))
}

export const updateLocation = (location) => {
    return ($.ajax({
        method: "PATCH",
        url: `api/locations/${location.id}`,
        data: { location }
    }))
}

export const deleteLocation = (locationId) => {
    return ($.ajax({
        method: "DELETE",
        url: `api/locations/${locationId}`
    }))
}

export const deleteLocations = (locationIdsArray) => {
    return ($.ajax({
        method: "DELETE",
        url: `/api/locations/delete_multiple`,
        data: { location_ids: locationIdsArray }
    }))
}