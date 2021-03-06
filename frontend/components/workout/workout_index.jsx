import React, { Component } from "react";
import WorkoutIndexItem from "./workout_index_item";
// import ActivitiesFooter from "../footer/recent_activities_footer";
// import LoadingIcon from "../loading/loading_icon";

export default class WorkoutIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   workouts: this.props.workouts,
      activity_type: true,
      name: false,
      distance: true,
      elevation: false,
      time: true,
      date_created: true,
    };

    this.sortNum = this.sortNum.bind(this);
    this.sortAlpha = this.sortAlpha.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkouts();
  }


  sortAlpha(sortKey) {
    const { workouts } = this.props;
    this.state[sortKey]
      ? workouts.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1))
      : workouts.sort((a, b) => (b[sortKey] > a[sortKey] ? 1 : -1));
    this.setState({ [sortKey]: !this.state[sortKey] });
  }
  sortNum(sortKey) {
    const { workouts } = this.props;
    this.state[sortKey]
      ? workouts.sort((a, b) => a[sortKey] - b[sortKey])
      : workouts.sort((a, b) => b[sortKey] - a[sortKey]);
    this.setState({ [sortKey]: !this.state[sortKey] });
  }

  render() {
    // const { workouts, deleteWorkout, loading } = this.props;
    const { workouts, deleteWorkout } = this.props;

    const workoutList = workouts.map((workout, idx) => (
      <WorkoutIndexItem
        key={workout.id}
        workout={workout}
        deleteWorkout={deleteWorkout}
        i={idx}
      />
    ));

    // const tableDisplay = loading ? (
    const tableDisplay = false ? null : ( //   <LoadingIcon />
      <div>
        <section className="activity-count">
          {workouts.length} Activities
        </section>
        <table>
          <thead>
            <tr>
              <th
                className="sport-header"
                onClick={(e) => this.sortAlpha("activity_type")}
              >
                Sport
              </th>
              <th
                className="sport-date"
                onClick={(e) => this.sortAlpha("date_created")}
              >
                Date
              </th>
              <th
                className="title-header"
                onClick={(e) => this.sortAlpha("name")}
              >
                Title
              </th>
              <th onClick={(e) => this.sortNum("time")}>Time</th>
              <th onClick={(e) => this.sortNum("distance")}>Distance</th>
              <th onClick={(e) => this.sortNum("elevation")}>Elevation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{workoutList}</tbody>
        </table>
      </div>
    );

    return (
      <div className="training-container">
        <div className="training-main">
          <div>
            <header className="training-head">
              <h1>My Activities</h1>
            </header>
            {tableDisplay}
          </div>
        </div>
        {/* <ActivitiesFooter workouts={this.props.recentWorkouts} /> */}
      </div>
    );
  }
}
