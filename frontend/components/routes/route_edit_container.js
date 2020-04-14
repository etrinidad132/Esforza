import { connect } from 'react-redux';
import RouteEdit from './route_edit';
import { openModal } from '../../actions/modal_actions';
import { fetchRoute } from '../../actions/route_actions';
import { fetchLocations } from '../../actions/location_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    const id = ownProps.match.params.routeId;
    const markers = Object.values(state.entities.locations);
    const previousMarkers = markers.filter(marker => marker.route_id)
    return {
        currentRoute: state.entities.routes[id],
        previousMarkers: previousMarkers,
        errors: state.errors.routes
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),
    fetchLocations: () => dispatch(fetchLocations()),
    openModal: (modalType) => dispatch(openModal(modalType))
})

export default connect(mapStateToProps, mapDispatchToProps)(RouteEdit);
