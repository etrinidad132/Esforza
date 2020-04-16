import { connect } from "react-redux";
import RouteUpdate from "./route_update"
import { updateRoute } from "../../actions/route_actions";
import { createLocation, deleteLocation, deleteLocations } from "../../actions/location_actions"
import { closeModal } from "../../actions/modal_actions";
// closeModal

const mapStateToProps = (state) => {
    return({
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.routes
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updateRoute: (route) => dispatch(updateRoute(route)),
        createLocation: (location) => dispatch(createLocation(location)),
        deleteLocation: (locationId) => dispatch(deleteLocation(locationId)),
        closeModal: () => dispatch(closeModal()),
        deleteLocations: (locationIdsArray) => dispatch(deleteLocations(locationIdsArray))
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(RouteUpdate)