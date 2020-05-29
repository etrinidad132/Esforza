import React from "react";
import { Link } from "react-router-dom";
import ActivityDisplayItem from "./activity_display_item";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.timeConverter = this.timeConverter.bind(this);
    this.userFlair = this.userFlair.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
    this.props.fetchRoutes();
    this.props.fetchLocations();
    this.props.fetchWorkouts();
  }

  timeConverter(seconds) {
    let secText = seconds % 60;
    let minText = Math.floor((seconds % 3600) / 60);
    const hourText = Math.floor(seconds / 3600);

    if (secText < 10) {
      secText = `0${secText}`;
    }

    if (hourText >= 1 && minText < 10) {
      minText = `0${minText}`;
    }

    return hourText >= 1
      ? `${hourText}:${minText}:${secText}`
      : `${minText}:${secText}`;
  }

  userFlair() {
    return (
      <section className="avatar-image blank">
        <h1 className="blank-pic">
          {this.props.currentUser.username[0].toUpperCase()}
        </h1>
      </section>
    );
  }

  render() {
    // const { currentUser, users, routes } = this.props;

    const activityFeed = [];
    this.props.routes.forEach((route) => {
      if (route.user_id === this.props.currentUser.id) {
        activityFeed.push(route);
      }
    });

    this.props.workouts.forEach((workout) => {
      if (workout.user_id === this.props.currentUser.id) {
        activityFeed.push(workout);
      }
    });

    activityFeed.sort((x, y) => (y.updated_at > x.updated_at ? 1 : -1));
    // activityFeed.sort((x, y) => Math.sign(y.id - x.id));

    const activityDisplay = activityFeed.map((activity, index) => {
      activity.username = this.props.users[activity.user_id].username;
      let type = activity.date_created ? "training" : "routes";

      return (
        <ActivityDisplayItem
          key={index}
          user={this.props.users[activity.user_id]}
          activity={activity}
          currentUser={this.props.currentUser}
          type={type}
        />
      );
    });

    const totalDistance = activityFeed.reduce((acc, ele) => {
      return acc + ele.distance;
    }, 0);

    const totalElevation = activityFeed.reduce((acc, ele) => {
      return acc + ele.elevation;
    }, 0);

    const totalTime = activityFeed.reduce((acc, ele) => {
      return acc + ele.time;
    }, 0);

    return (
      <div className="dashboard-container">
        <div className="user-statistics">
          <section className="user-profile-snippet">
            {this.userFlair()}
            <section className="user-profile-header">
              {/* Link to user show page when I have time to make this */}
            </section>
            <div className="total-statistics">
              <div>
                <section className="statistic">
                  <label>Activities</label>
                  <h2>{activityFeed.length}</h2>
                </section>
              </div>
              <div>
                <section className="statistic">
                  <label>Distance</label>
                  <h2>{totalDistance.toFixed(2)}</h2>
                </section>
                <section className="statistic">
                  <label>Elevation</label>
                  <h2>{totalElevation.toFixed(2)}</h2>
                </section>
                <section className="statistic">
                  <label>Time</label>
                  <h2>{this.timeConverter(totalTime)}</h2>
                </section>
              </div>
            </div>
          </section>
        </div>
        <div className="activity-feed">
          <section className="banner" />
          {activityDisplay}
        </div>
        <div className="personal-ads">
          <section>
            <div>
              <img className="github" src={window.githubIcon} />
            </div>
            <div>
              <label>GitHub</label>
              <p>Check out my GitHub and see my profile!</p>
              <a
                className="personal"
                target="_blank"
                href="https://github.com/etrinidad132/"
              >
                View Profile
              </a>
            </div>
          </section>
          <section>
            <div>
              <img className="linkedin" src={window.linkedInIcon} />
            </div>
            <div>
              <label>LinkedIn</label>
              <p>Check out my LinkedIn and see my profile!</p>
              <a
                className="personal"
                target="_blank"
                href="https://www.linkedin.com/in/edward-trinidad/"
              >
                View My Profile
              </a>
            </div>
          </section>
          <section>
            <div>
              <img className="linkedin" src={window.angelListIcon} />
            </div>
            <div>
              <label>Angel List</label>
              <p>Check out my AngelList and see my profile!</p>
              <a
                className="personal"
                target="_blank"
                href="https://angel.co/u/edward-trinidad"
              >
                View My Profile
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
