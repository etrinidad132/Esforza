import React from "react";
import { Link } from "react-router-dom";
import ActivityDisplayItem from "./activity_display_item"

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.timeConverter = this.timeConverter.bind(this)
        this.userFlair = this.userFlair.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id)
        this.props.fetchRoutes()
        this.props.fetchLocations()
    }

    timeConverter(seconds) {
        let secText = seconds % 60;
        let minText = Math.floor(seconds % 3600 / 60);
        const hourText = Math.floor(seconds / 3600);

        if (secText < 10) {
            secText = `0${secText}`;
        }

        if (hourText >= 1 && minText < 10) {
            minText = `0${minText}`;
        }

        return ((hourText >= 1) ? `${hourText}:${minText}:${secText}` : `${minText}:${secText}`);
    }

    userFlair() {
        return (
            <section className="avatar-image blank">
                <h1 className="blank-pic">{this.props.currentUser.username[0].toUpperCase()}</h1>
            </section>
        )
    }

    render() {
        // const { currentUser, users, routes } = this.props;

        const routesArray = [];
        const activityFeed = []
        this.props.routes.forEach(route => {
            if (route.user_id === this.props.currentUser.id) {
                routesArray.push(route);
                activityFeed.push(route);
            }
        });

        activityFeed.sort((x, y) => Math.sign(y.id - x.id))

        const activityDisplay = activityFeed.map((route, index) => {
            route.username = this.props.users[route.user_id].username;

            return (
                <ActivityDisplayItem
                    key={index}
                    user={this.props.users[route.user_id]}
                    route={route}
                    currentUser={this.props.currentUser}
                />
            )
        })

        const totalDistance = routesArray.reduce((acc, ele) => {
            return acc + ele.distance
        }, 0)

        const totalElevation = routesArray.reduce((acc, ele) => {
            return acc + ele.elevation
        }, 0)

        const totalTime = routesArray.reduce((acc, ele) => {
            return acc + ele.time
        }, 0)


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
                                    <h2>{routesArray.length}</h2>
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
                            <p>
                                <a className="personal" href="https://github.com/etrinidad132/">View Profile</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Dashboard;







// import React from "react";
// import { Link } from "react-router-dom";
// import ActivityDisplayItem from "./activity_display_item"

// class Dashboard extends React.Component {
//     constructor(props) {
//         super(props)

//         this.timeConverter = this.timeConverter.bind(this)
//         this.userFlair = this.userFlair.bind(this)
//     }

//     componentDidMount() {
//         this.props.fetchUser(this.props.currentUser.id)
//         this.props.fetchRoutes()
//     }

//     timeConverter(seconds) {
//         let secText = seconds % 60;
//         let minText = Math.floor(seconds % 3600 / 60);
//         const hourText = Math.floor(seconds / 3600);

//         if (secText < 10) {
//             secText = `0${secText}`;
//         }

//         if (hourText >= 1 && minText < 10) {
//             minText = `0${minText}`;
//         }

//         return ((hourText >= 1) ? `${hourText}:${minText}:${secText}` : `${minText}:${secText}`);
//     }

//     userFlair() {
//         return (
//             <section className="avatar-image blank">
//                 {/* <h1 className="blank-pic">{this.props.user.username[0].toUpperCase()}</h1> */}
//             </section>
//         )
//     }

//     render() {
//         // const { currentUser, users, routes } = this.props;

//         const routesArray = [];
//         const activityFeed = []
//         this.props.routes.forEach(route => {
//             if (route.user_id === this.props.currentUser.id) {
//                 routesArray.push(route);
//                 activityFeed.push(route);
//             }
//         });

//         activityFeed.sort((x, y) => Math.sign(x - y))

//         const activityDisplay = activityFeed.map((route, index) => {
//             route.username = this.props.users[route.user_id].username;

//             return (
//                 <ActivityDisplayItem
//                     key={index}
//                     user={this.props.users[route.user_id]}
//                     route={route}
//                     currentUser={this.props.currentUser}
//                 />
//             )
//         })

//         const totalDistance = routesArray.reduce((acc, ele) => {
//             return acc + ele.distance
//         }, 0)

//         const totalElevation = routesArray.reduce((acc, ele) => {
//             return acc + ele.elevation
//         }, 0)

//         const totalTime = routesArray.reduce((acc, ele) => {
//             return acc + ele.time
//         }, 0)


//         return (
//             <div className="dashboard-home">
//                 <div className="personal-stats">
//                     <section className="profile-card">
//                         {this.userFlair()}
//                         <section className="profile-main-text">
//                             {/* Link to user show page when I have time to make this */}
//                             <h1>{this.props.currentUser.username}</h1>
//                         </section>
//                         <div className="total-stats">
//                             <div>
//                                 <section className="total-stats-stat">
//                                     <label>Activities</label>
//                                     <h2>{routesArray.length}</h2>
//                                 </section>
//                             </div>
//                             <div>
//                                 <section className="total-stats-stat">
//                                     <label>Distance</label>
//                                     <h2>{totalDistance.toFixed(2)}</h2>
//                                 </section>
//                                 <section className="total-stats-stat">
//                                     <label>Elevation</label>
//                                     <h2>{totalElevation.toFixed(2)}</h2>
//                                 </section>
//                                 <section className="total-stats-stat">
//                                     <label>Time</label>
//                                     <h2>{this.timeConverter(totalTime)}</h2>
//                                 </section>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//                 <div className="advertise">
//                     <section className="banner">
//                         {activityDisplay}
//                     </section>
//                 </div>
//                 <div className="personal-adver">
//                     <section>
//                         <div>
//                             <img className="github" src={window.githubIcon} />
//                         </div>
//                         <div>
//                             <label>GitHub</label>
//                             <p>
//                                 <a className="personal" tartget="_blank" href="https://github.com/etrinidad132/">View Profile</a>
//                             </p>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Dashboard;