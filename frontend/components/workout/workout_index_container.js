import { connect } from "react-redux";
import IndexWorkout from "./index_workout";
import { fetchWorkouts, destroyWorkout } from "../../actions/workout_actions";

const mapStateToProps = (state) => {
  const { workouts } = state.entities;
  const { id } = state.session.currentUser;
  return {
    loading: state.ui.loading.indexLoading,
    workouts: Object.values(workouts)
      .reverse()
      .filter((workout) => id === workout.userId)
      .sort((a, b) => (b.createDate > a.createDate ? 1 : -1)),
    // recentWorkouts: Object.values(workouts)
    //   .reverse()
    //   .filter((workout) => id === workout.userId)
    //   .sort((a, b) => (b.createDate > a.createDate ? 1 : -1)),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchWorkouts: () => dispatch(fetchWorkouts()),
  deleteWorkout: (id) => dispatch(destroyWorkout(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexWorkout);
