import React, { Component } from "react";

export default class WorkoutNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser,
      distance: 0,
      elevation: 0,
      name: "",
      //   hours: "0",
      hours: 0,
      //   minutes: "0",
      minutes: 0,
      //   seconds: "0",
      seconds: 0,
      activity_type: "run",
      date_created: this.formatDate(Date.now()),
    };

    this.formatDate = this.formatDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  formatDate(date) {
    let d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }

    if (day.length < 2) {
      day = "0" + day;
    }

    return [year, month, day].join("-");
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name === "") {
      document.getElementById("name-err").innerHTML = "Name cannot be blank";
    } else {
      this.props.createWorkout(this.state).then(
        // reformat after
        (res) => {
          console.log(res.workout.id); // comment this out after show page is built
          this.props.history.push(`/training/${res.workout.id}`);
        }
      );
    }
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value }, () => {
        let result =
          parseInt(this.state.hours * 3600 || 0) + // Parse hours if they exist otherwise parse 0
          parseInt(this.state.minutes * 60 || 0) +
          parseInt(this.state.seconds || 0);
        this.setState({ time: result });
      });
    };
  }

  renderErrors() {
    return (
      <section className="workout-errors">
        {this.props.errors.map((error, i) => (
          <ul>
            <li key={`error-${i}`}>{error}</li>
          </ul>
        ))}
      </section>
    );
  }

  render() {
    return (
      <div>
        <div className="new-workout">
          <form className="new-workout-form" onSubmit={this.handleSubmit}>
            <header>
              <h1>Manual Entry</h1>
            </header>
            <section className="form-sec">
              <div>
                <label>Distance</label>
                <input
                  className="distance-workout-form"
                  type="number"
                  value={this.state.distance}
                  onChange={this.update("distance")}
                />
              </div>
              <div>
                <label>Time</label>
                <section className="duration">
                  <input
                    type="number"
                    value={this.state.hours}
                    onChange={this.update("hours")}
                  />
                  <input
                    type="number"
                    value={this.state.minutes}
                    onChange={this.update("minutes")}
                  />
                  <input
                    type="number"
                    value={this.state.seconds}
                    onChange={this.update("seconds")}
                  />
                </section>
              </div>
              <div>
                <label>Elevation</label>
                <input
                  className="elevation-workout-form"
                  type="number"
                  value={this.state.elevation}
                  onChange={this.update("elevation")}
                />
              </div>
            </section>
            <hr />
            <section className="form-sec">
              <div>
                <label>Sport</label>
                <select
                  className="sport-workout-form"
                  defaultValue={"Run"}
                  onChange={this.update("workout_type")}
                >
                  <option value="Run">Run</option>
                  <option value="Ride">Ride</option>
                  <option value="Hike">Hike</option>
                  <option value="Walk">Walk</option>
                </select>
                <label>Date</label>
                <input
                  type="date"
                  className="date-workout-form"
                  value={this.state.date_created}
                  onChange={this.update("date_created")}
                />
              </div>
            </section>
            <section className="form-sec">
              <div>
                <label>Title</label>
                <input
                  className="title-workout-form"
                  type="text"
                  value={this.state.name}
                  onChange={this.update("name")}
                />
                <label id="name-err"></label>
              </div>
            </section>
            <hr />
            <section className="form-sec">
              <div>
                <label>Description</label>
                <textarea
                  className="description-workout-form"
                  value={this.state.description}
                  onChange={this.update("description")}
                ></textarea>
              </div>
            </section>
            <hr />
            <section className="form-sec">
              <div>
                <button className="workout-btn-save">Create</button>
              </div>
            </section>
          </form>
        </div>
        {/* <ActivitiesFooter workouts={this.props.recentWorkouts}/> */}
      </div>
    );
  }
}
