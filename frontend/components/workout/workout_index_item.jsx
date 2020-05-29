import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WorkoutIndexItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`;
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`;
  }

  handleDelete() {
    this.props.deleteWorkout(this.props.workout.id);
  }

  displayDate(inputDate) {
    let result = [];
    let date = new Date(inputDate);
    const days = {
      0: "Mon",
      1: "Tue",
      2: "Wed",
      3: "Thu",
      4: "Fri",
      5: "Sat",
      6: "Sun",
    };
    result.push(days[date.getDay()]);
    result.push(inputDate.split("-").reverse().join("/"));
    return result.join(", ");
  }

  render() {
    const {
      id,
      activity_type,
      name,
      time,
      distance,
      elevation,
      date_created,
    } = this.props.workout;
    return (
      <tr
        className={
          this.props.i % 2 === 0
            ? "index-workout-item"
            : "index-workout-item white"
        }
      >
        <td className="table-type">{activity_type}</td>
        <td className="table-date">{this.displayDate(date_created)}</td>
        <td className="table-string">
          <Link to={`/training/${id}`}>{name}</Link>
        </td>
        <td className="table-number">
          <h3>{this.displayTime(time)}</h3>
        </td>
        <td className="table-number">
          <h3>{distance} mile</h3>
        </td>
        <td className="table-number">
          <h3>{elevation} ft</h3>
        </td>
        <td className="table-button">
          <Link to={`/training/edit/${id}`}>Edit</Link>
          <a onClick={this.handleDelete}>Delete</a>
        </td>
      </tr>
    );
  }
}
