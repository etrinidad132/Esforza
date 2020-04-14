import { connect } from "react-redux";
import { fetchRoute } from "../../actions/route_actions"
import { createLocation, fetchLocations } from "../../actions/location_actions"
import { openModal } from "../../actions/modal_actions";
import RouteNew from "./route_new"

// const mapStateToProps = (state, ownProps) => {
//     return ({
//         // route: state.entities.routes[ownProps.match.params.routeId]
//     })
// }

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),// to show new route after creation
        fetchLocations: () => dispatch(fetchLocations()),// to fetch all the markers after they have been placed on the map
        createLocation: (location) => dispatch(createLocation(location)),// to save new markers to the DB
        openModal: (modalType) => dispatch(openModal(modalType))
    })
}

export default connect(null, mapDispatchToProps)(RouteNew)