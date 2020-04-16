import React from "react";
import { Link } from "react-router-dom";

class ActivityDisplayItem extends React.Component {
    constructor(props) {
        super(props)

        this.timeConverter = this.timeConverter.bind(this);
        this.dateConverter = this.dateConverter.bind(this);
        this.userFlair = this.userFlair.bind(this);
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

    dateConverter(date) {
        const months = {
            '01': 'January',
            '02': 'Febuary',
            '03': 'March',
            '04': 'April',
            '05': 'May',
            '06': 'June',
            '07': 'July',
            '08': 'August',
            '09': 'September',
            '10': 'October',
            '11': 'November',
            '12': 'December',
        };
        return (`${months[date.slice(5, 7)]} ${date.slice(8, 10)}, ${date.slice(0, 4)}`);
    }

    userFlair() {
        return (
            <section className="avatar-image-mini">
                <h1 className="blank-pic">{this.props.user.username[0].toUpperCase()}</h1>
                {/* <h1>{this.props.user.username}</h1> */}
            </section>
        )
    }

    render() {
        // const { distance, elevation, time, description, name, id, created_at } = this.props.route;
        // const { user } = this.props;

        return (
            <div className="activity-feed-item">
                <div className="activity-info">
                    {this.userFlair()}
                    <section>
                        <header className="activity-feed-item-header">
                            <h2>
                                {/* username will link to user show/profile page in the future */}
                                {this.props.user.username}
                            </h2>
                            <label>{this.dateConverter(this.props.route.created_at)}</label>
                        </header>
                        <div className="activity-feed-item-name">
                            <Link className="route-link" to={`/routes/${this.props.route.id}`}>{this.props.route.name}</Link>
                        </div>
                        <div className="activity-feed-item-desc">
                            <p>{this.props.route.description}</p>
                        </div>
                        <div className="activity-feed-item-stats">
                            <section>
                                <label>Distance</label>
                                <h3>{this.props.route.distance} mi</h3>
                            </section>
                            <section>
                                <label>Elevation</label>
                                <h3>{this.props.route.elevation} ft</h3>
                            </section>
                            <section>
                                <label>Time</label>
                                <h3>{this.timeConverter(this.props.route.time)}</h3>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default ActivityDisplayItem;






// import React from "react";
// import { Link } from "react-router-dom";

// class ActivityDisplayItem extends React.Component {
//     constructor(props) {
//         super(props)

//         this.timeConverter = this.timeConverter.bind(this);
//         this.dateConverter = this.dateConverter.bind(this);
//         this.userFlair = this.userFlair.bind(this);
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

//     dateConverter(date) {
//         const months = {
//             '01': 'January',
//             '02': 'Febuary',
//             '03': 'March',
//             '04': 'April',
//             '05': 'May',
//             '06': 'June',
//             '07': 'July',
//             '08': 'August',
//             '09': 'September',
//             '10': 'October',
//             '11': 'November',
//             '12': 'December',
//         };
//         return (`${months[date.slice(5, 7)]} ${date.slice(8, 10)}, ${date.slice(0, 4)}`);
//     }

//     userFlair() {
//         return (
//             <section className="avatar-image blank">
//                 {/* <h1 className="blank-pic">{this.props.user.username[0].toUpperCase()}</h1> */}
//             </section>
//         )
//     }

//     render() {
//         // const { distance, elevation, time, description, name, id, created_at } = this.props.route;
//         // const { user } = this.props;

//         return (
//             <div className="activity-feed-item`">
//                 <div className="activity-info">
//                     {this.userFlair()}
//                     <section>
//                         <header className="feed-item-header">
//                             <h2>
//                                 {/* username will link to user show/profile page in the future */}
//                                 {this.props.user.username}
//                             </h2>
//                             <label>{this.dateConverter(this.props.route.created_at)}</label>
//                         </header>
//                         <div className="feed-item-name">
//                             <Link className="training-link" to={`/routes/${this.props.route.id}`}>{name}</Link>
//                         </div>
//                         <div className="feed-item-desc">
//                             <p>{this.props.route.description}</p>
//                         </div>
//                         <div className="feed-item-stats">
//                             <section>
//                                 <label>Distance</label>
//                                 <h3>{this.props.route.distance} mi</h3>
//                             </section>
//                             <section>
//                                 <label>Elevation</label>
//                                 <h3>{this.props.route.elevation} ft</h3>
//                             </section>
//                             <section>
//                                 <label>Time</label>
//                                 <h3>{this.timeConverter(this.props.route.time)}</h3>
//                             </section>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ActivityDisplayItem;