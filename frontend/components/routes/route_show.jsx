import React from "react";
import { Link } from "react-router-dom";
import MiniMap from "./mini_map";

class RouteShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: this.props.locations
        }
        this.route = this.props.route;

        this.timeConverter = this.timeConverter.bind(this);
        this.dateConverter = this.dateConverter.bind(this);
        this.capitalize = this.capitalize.bind(this);
    }

    componentDidMount() {
        this.props.fetchRoute(this.props.match.params.routeId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.locations !== this.props.locations) {
            this.setState({
                locations: this.props.locations
            })
        }
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
            <section className="avatar-image blank">
                {/* <h1 className="blank-pic">{this.props.user.username[0].toUpperCase()}</h1> */}
            </section>
        )
    }

    capitalize(string) {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    render() {
        // debugger
        let output = (this.props.route === undefined) ? null : (
            <div className="route-show-content">
                <div className="route-show-header">
                    <header>{this.props.route.name}</header>
                    <Link to={`/routes/edit/${this.props.route.id}`} className='edit-btn'>Edit</Link>
                </div>
                <div className="route-show-main">
                    <section className="minimap">
                        <MiniMap
                            route={this.props.route}
                            locations={Object.values(this.props.locations)}>
                        </MiniMap>
                    </section>
                    <section className="route-show-stats">
                        <div className="name">
                            {this.userFlair()}
                            <section className="username">
                                By {this.props.user.username}
                                <h3>Created on {this.dateConverter(this.props.route.created_at)}</h3>
                            </section>
                        </div>
                        <hr className='hr' />
                        <div className="statistics-one">
                            <section>
                                <h2>{this.props.route.distance} mi</h2>
                                <h3>Distance</h3>
                            </section>

                            <section>
                                <h2>{this.props.route.elevation} ft</h2>
                                <h3>Elevation Gain</h3>
                            </section>

                            <section>
                                <h2>{this.capitalize(this.props.route.route_type)}</h2>
                                <h3>Ride Type</h3>
                            </section>
                        </div>
                        <div className="statistics-two">
                            <h3>Est. Moving Time</h3>
                            <h2>{this.timeConverter(this.props.route.time)}</h2>
                        </div>
                        <hr />
                    </section>
                </div>
            </div>

        )
        return (
            <div className="route-show">
                {output}
            </div>
        )
    }
}

export default RouteShow;