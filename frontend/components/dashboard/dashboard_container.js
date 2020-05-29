import { connect } from "react-redux";
import Dashboard from "./dashboard"
import { fetchRoutes } from "../../actions/route_actions";
import { fetchUser } from "../../actions/user_actions";
import { fetchLocations } from "../../actions/location_actions";
import { fetchWorkouts } from "../../actions/workout_actions";

const mapStateToProps = (state) => {
    return({
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        routes: Object.values(state.entities.routes),
        workouts: Object.values(state.entities.workouts)
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchRoutes: () => dispatch(fetchRoutes()),
        fetchLocations: () => dispatch(fetchLocations()),
        fetchWorkouts: () => dispatch(fetchWorkouts())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)