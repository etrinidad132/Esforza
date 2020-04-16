import { connect } from 'react-redux';
import MiniMap from './mini_map';
import { fetchRoute } from '../../actions/route_actions';
import { fetchLocations } from '../../actions/location_actions';


const mapDispatchToProps = dispatch => ({
    fetchRoute: routeId => dispatch(fetchRoute(routeId)),
    fetchLocations: () => dispatch(fetchLocations()),
})

export default connect(null, mapDispatchToProps)(MiniMap);
