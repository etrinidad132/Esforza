export const receiveRoutes = () => {
    return (
        $.ajax({
            method: "GET",
            url: "/api/routes"
        })
    )
}

export const receiveRoute = (routeId) => {
    return (
        $.ajax({
            method: "GET",
            url: `/api/routes/${routeId}`
        })
    )
}

export const createRoute = (route) => {
    return (
        $.ajax({
            method: "POST",
            url: "/api/routes/",
            data: { route: route }
        })
    )
}

export const updateRoute = (route) => {
    return (
        $.ajax({
            method: "PATCH",
            url: `/api/routes/${route.id}`,
            data: { route: route }
        })
    )
}

export const destroyRoute = (routeId) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/routes/${routeId}`
        })
    )
}