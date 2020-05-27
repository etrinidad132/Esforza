export const receiveWorkouts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/workouts",
  });
};

export const receiveWorkout = (workoutId) => {
  return $.ajax({
    method: "GET",
    url: `/api/workouts/${workoutId}`,
  });
};

export const createWorkout = (workout) => {
  return $.ajax({
    method: "POST",
    url: "/api/workouts/",
    data: { workout: workout },
  });
};

export const updateWorkout = (workout) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/workouts/${workout.id}`,
    data: { workout: workout },
  });
};

export const destroyWorkout = (workoutId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/workouts/${workoutId}`,
  });
};
