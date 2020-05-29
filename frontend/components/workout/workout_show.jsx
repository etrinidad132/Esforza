import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WorkoutShow extends Component {
  constructor(props) {
    super(props);
    this.displayTime = this.displayTime.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    // this.likeCounter = this.likeCounter.bind(this);
    // this.handleButtonCreate = this.handleButtonCreate.bind(this);
    // this.handleButtonDelete = this.handleButtonDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkouts();
  }

//   handleButtonCreate() {
//     let { createLike, currentUser, workout } = this.props;
//     createLike({
//       user_id: currentUser.id,
//       workout_id: workout.id,
//     });
//   }
//   handleButtonDelete(likeId) {
//     return () => this.props.deleteLike(likeId);
//   }

//   likeCounter() {
//     let { likes, currentUser, workout } = this.props;
//     let likeObj = { likes: 0, liked: false };
//     likes.forEach((like) => {
//       if (like.workoutId === workout.id) {
//         let liked = like.userId === currentUser.id ? true : false;
//         likeObj.likes++;
//         if (liked) {
//           likeObj.liked = true;
//           likeObj.likeId = like.id;
//         }
//       }
//     });
//     return likeObj;
//   }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`;
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`;
  }

  displayDate(inputDate) {
    let result = [];
    let date = new Date(...inputDate.split("-"));
    const days = {
      4: "Monday",
      5: "Tuesday",
      6: "Wednesday",
      0: "Thursday",
      1: "Friday",
      2: "Saturday",
      3: "Sunday",
    };
    const months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };
    result.push(days[date.getDay()]);
    result.push(`${months[date.getMonth()]} ${date.getDate()}`);
    result.push(date.getFullYear());
    return result.join(", ");
  }

  handleDelete() {
    this.props
      .deleteWorkout(this.props.match.params.workoutId)
      .then(() => this.props.history.push(`/training`));
  }

  handleEdit() {
    this.props.history.push(
      `/training/edit/${this.props.match.params.workoutId}`
    );
  }

  profilePic() {
    const { user } = this.props;

    return user.photoUrl ? (
      <img className="avatar-image-workout" src={user.photoUrl} />
    ) : (
      <section className="avatar-image-workout blank">
        <h1 className="blank-pic">{user.username[0].toUpperCase()}</h1>
      </section>
    );
  }

  render() {
    const { workout, user, recentWorkouts, id, likes, loading } = this.props;
    // debugger
    // const likeObj = this.likeCounter();

    if (loading)
      return (
        <div className="show-workout-container">
          <div className="show-workout-main">
            {/* <LoadingIcon /> */}
          </div>
          {/* <RecentActivities workouts={recentWorkouts} /> */}
        </div>
      );

    // const button = likeObj.liked ? (
    //   <div
    //     className="like-button"
    //     onClick={this.handleButtonDelete(likeObj.likeId)}
    //   >
    //     <i className="fas fa-thumbs-up"></i>
    //     {likeObj.likes}
    //   </div>
    // ) : (
    //   <div className="like-button" onClick={this.handleButtonCreate}>
    //     <i className="far fa-thumbs-up"></i>
    //     {likeObj.likes}
    //   </div>
    // );
    const icons =
      id === workout.user_id ? (
        <div className="icons">
          <span onClick={this.handleEdit} className="show-workout-btn-edit">
            <i className="far fa-edit"></i>
          </span>
          <span onClick={this.handleDelete}>
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
      ) : null;
    const display =
      this.props.workout.id === 0 ? null : (
        <div className="show-workout-main">
          {icons}
          <div className="show-workout-display">
            <header>
              <h1>
                <Link className="profile-link" to={`/athletes/${user.id}`}>
                  {user.username}
                </Link>{" "}
                - {workout.workoutType}
              </h1>{" "}
              {/* {button} */}
            </header>
            <div className="show-workout-info">
              <section className="show-workout-left">
                {this.profilePic()}
                <section className="show-text">
                  <label className="show-workout-date">
                    {this.displayDate(workout.date_created)}
                  </label>
                  <h2>{workout.name}</h2>
                  <p className="workout-desc">{workout.description}</p>
                </section>
              </section>
              <section className="show-workout-right">
                <section>
                  <div>
                    <h3>{workout.distance} mi</h3>
                    <label>Distance</label>
                  </div>
                  <div>
                    <h3>{this.displayTime(workout.time)}</h3>
                    <label>Duration</label>
                  </div>
                  <div>
                    <h3>{workout.elevation} ft</h3>
                    <label>Elevation</label>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      );
    return (
      <div className="show-workout-container">
        {display}
        {/* <RecentActivities workouts={recentWorkouts} /> */}
      </div>
    );
  }
}
