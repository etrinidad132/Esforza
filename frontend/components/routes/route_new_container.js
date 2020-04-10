import { connect } from "react-redux";
import { fetchRoute } from "../../actions/route_actions"

const mapStateToProps = (state, ownProps) => {
    return ({
        route: state.entities.routes[ownProps.match.params.routeId]
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchRoute: (routeId) => dispatch(fetchRoute(routeId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteShowMap)