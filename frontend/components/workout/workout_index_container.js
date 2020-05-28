import { connect } from "react-redux";
import WorkoutIndex from "./workout_index";
import { fetchWorkouts, destroyWorkout } from "../../actions/workout_actions";

const mapStateToProps = (state) => {
  const { workouts } = state.entities;
//   const { id } = state.session.currentUser;
  return {
    // loading: state.ui.loading.indexLoading,
    workouts: Object.values(workouts)
      .reverse()
      .filter((workout) => state.session.id === workout.user_id)
      //   .sort((a, b) => (b.create_date > a.create_date ? 1 : -1)),
      .sort((a, b) => Math.sign(a.create_date - b.create_date)),
    // recentWorkouts: Object.values(workouts)
    //   .reverse()
    //   .filter((workout) => id === workout.userId)
    //   .sort((a, b) => (b.create_date > a.create_date ? 1 : -1)),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchWorkouts: () => dispatch(fetchWorkouts()),
  deleteWorkout: (workoutId) => dispatch(destroyWorkout(workoutId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
