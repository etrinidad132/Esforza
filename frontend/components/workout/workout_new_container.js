import { connect } from "react-redux";
import WorkoutNew from "./workout_new";
import { createWorkout, fetchWorkouts } from "../../actions/workout_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id,
    errors: state.errors.workouts,
//     recentWorkouts: Object.values(state.entities.workouts)
//       .reverse()
//       .filter((el) => id === el.userId)
//       .sort((a, b) => (b.createDate > a.createDate ? 1 : -1)),
  };
};

const mapDispatchToProps = (dispatch) => ({
  createWorkout: (workout) => dispatch(createWorkout(workout)),
  fetchWorkouts: () => dispatch(fetchWorkouts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutNew);
