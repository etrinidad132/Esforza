import { connect } from "react-redux";
import RouteShow from "./route_show";
import { fetchRoute } from "../../actions/route_actions";
import { fetchLocations } from "../../actions/location_actions";

const mapStateToProps = (state, ownProps) => {
    // debugger
    const route = state.entities.routes[ownProps.match.params.routeId];
    let user = {};
    let locations = [];

    if (route === undefined) {
        user = { username: "" };
    } else {
        user = state.entities.users[route.user_id]
        // debugger
        locations = Object.values(state.entities.locations);
        locations.filter(location => {
            return location.route_id === parseInt(ownProps.match.params.routeId);
        })
    }

    return({
        currentUser: state.session.id,
        user: user,
        route: route,
        locations: locations
    })
}

const mapDispatchToProps = (dispatch) => ({
    fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),
    fetchLocations: () => dispatch(fetchLocations())
})

export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);