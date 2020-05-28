import { connect } from "react-redux";
import WorkoutShow from "./workout_show";
import { fetchWorkouts, destroyWorkout } from "../../actions/workout_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStatetoProps = (state, ownProps) => {
  debugger;
  let workout = state.entities.workouts[ownProps.match.params.workoutId];
  //   const currentUser = state.session.currentUser;
  const currentUser = state.entities.users[state.session.id];
  //   const likes = Object.values(state.entities.likes);
  //   const { id } = state.session.currentUser;
  let user;
  if (workout === undefined) {
    workout = { id: 0 };
    user = { username: "" };
  } else {
    debugger;
    user = state.entities.users[workout.user_id]; // confirm it's not workout.user_id
  }
  return {
    id: state.session.id,
    // loading: state.ui.loading.indexLoading,
    currentUser,
    user,
    workout,
    // likes,
    // recentWorkouts: Object.values(state.entities.workouts).reverse()
    //   .filter(el => id === el.userId && el.id !== workout.id)
    //   .sort((a, b) => b.createDate > a.createDate ? 1 : -1),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchWorkouts: () => dispatch(fetchWorkouts()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  deleteWorkout: (id) => dispatch(destroyWorkout(id)),
  //   createLike: (like) => dispatch(createLike(like)),
  //   deleteLike: (id) => dispatch(deleteLike(id)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(WorkoutShow);
