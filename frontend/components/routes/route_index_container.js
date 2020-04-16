import { connect } from "react-redux";
import RouteIndex from "./route_index";
import { fetchRoutes, fetchRoute, createRoute, updateRoute, destroyRoute } from "./../../actions/route_actions"
import { fetchLocations } from "../../actions/location_actions";

const mapStateToProps = (state) => {
    return ({
        routes: Object.values(state.entities.routes),
        currentUser: state.session.id
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchRoutes: () => dispatch(fetchRoutes()),
        fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),
        createRoute: (route) => dispatch(createRoute(route)),
        updateRoute: (route) => dispatch(updateRoute(route)),
        destroyRoute: (routeId) => dispatch(destroyRoute(routeId)),
        fetchLocations: () => dispatch(fetchLocations())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);