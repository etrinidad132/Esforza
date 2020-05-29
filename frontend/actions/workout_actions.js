import * as APIUtil from "../util/workout_api_util";

export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";
export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const DELETE_WORKOUT = "DELETE_WORKOUT";
export const RECEIVE_WORKOUT_ERROR = "RECEIVE_WORKOUT_ERROR";
export const RECEIVE_WORKOUT_CRUD_ERRORS = "RECEIVE_WORKOUT_CRUD_ERRORS";

const receiveWorkouts = (workouts) => {
  return {
    type: RECEIVE_WORKOUTS,
    workouts: workouts,
  };
};

const receiveWorkout = (workout) => {
  // debugger
  if (workout instanceof Array) {
    return {
      type: RECEIVE_WORKOUT_CRUD_ERRORS,
      errors: workout,
    };
  } else {
    return {
      type: RECEIVE_WORKOUT,
      workout: workout,
    };
  }
};

const deleteWorkout = (workoutId) => {
  // debugger
  return {
    type: DELETE_WORKOUT,
    workoutId: workoutId,
  };
};

const receiveErrors = (error) => {
  // debugger
  return {
    type: RECEIVE_WORKOUT_ERROR,
    error: error,
  };
};
const receiveCrudErrors = (errorsArray) => {
  // debugger
  return {
    type: RECEIVE_WORKOUT_CRUD_ERRORS,
    errors: errorsArray,
  };
};

/// Thunk Actions

export const fetchWorkouts = () => (dispatch) =>
  APIUtil.receiveWorkouts().then(
    (workouts) => dispatch(receiveWorkouts(workouts)),
    (err) => dispatch(receiveErrors(err.statusText))
  );

export const fetchWorkout = (workoutId) => (dispatch) =>
  APIUtil.receiveWorkout(workoutId).then(
    (workout) => dispatch(receiveWorkout(workout)),
    (err) => dispatch(receiveErrors(err.statusText))
  );

export const createWorkout = (workout) => (dispatch) =>
  APIUtil.createWorkout(workout).then(
    (workout) => dispatch(receiveWorkout(workout)),
    (err) => dispatch(receiveErrors(err.statusText))
  );

export const updateWorkout = (workout) => (dispatch) =>
  APIUtil.updateWorkout(workout).then(
    (workout) => dispatch(receiveWorkout(workout)),
    (err) => dispatch(receiveErrors(err.statusText))
  );

export const destroyWorkout = (workoutId) => (dispatch) =>
  APIUtil.destroyWorkout(workoutId).then(
    (workout) => dispatch(deleteWorkout(workout.id)),
    (err) => dispatch(receiveErrors(err.statusText))
  );
