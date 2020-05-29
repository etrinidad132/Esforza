import {
  RECEIVE_WORKOUTS,
  RECEIVE_WORKOUT,
  DELETE_WORKOUT,
} from "../actions/workout_actions";

const workoutReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_WORKOUTS: /// working on this
      return action.workouts;
    case RECEIVE_WORKOUT:
      return Object.assign({}, state, { [action.workout.id]: action.workout });
    case DELETE_WORKOUT:
      newState = Object.assign({}, state);
      // debugger
      delete newState[action.workoutId];
      // debugger
      return newState;
    default:
      return state;
  }
};

export default workoutReducer;
