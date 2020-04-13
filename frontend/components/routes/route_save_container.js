import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import RouteSave from './route_save';
import { createRoute } from '../../actions/route_actions';
import { createLocation } from '../../actions/location_actions';

const mapStatetoProps = state => ({
    currentUser: state.entities.users[state.session.id],
    // currentUser: state.session.id,
    errors: state.errors.routes
})

const mapDispatchToProps = dispatch => {
    return {
        createRoute: route => dispatch(createRoute(route)),
        createLocation: location => dispatch(createLocation(location)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(RouteSave);
