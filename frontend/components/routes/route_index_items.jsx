import React from "react";
import { Link } from "react-router-dom"

class RouteIndexItem extends React.Component {
    constructor(props) {
        super(props)// route, updateRoute, destroyRoute, key

        this.timeConverter = this.timeConverter.bind(this)
        this.destroyRoute = this.destroyRoute.bind(this)
        this.updateRoute = this.updateRoute.bind(this)
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

    destroyRoute() {
        debugger
        this.props.destroyRoute(this.props.route.id)
        alert("delete button is working")
    }

    updateRoute() {
        debugger
        alert("update button is working")
        //link to update route page
        // this.props.updateRoute()
    }

    render() {
        // debugger
        return (
            <>
                <div className="route-index-item-container">
                    {/* <h1>Hello from Route Index Items</h1> */}
                    <i className="fas fa-wrench" onClick={this.updateRoute}></i>
                    <i className="fas fa-times" onClick={this.destroyRoute}></i>
                    <Link to={`routes/${this.props.route.id}`}>
                        <img className="map-thumbnail" src={this.props.route.thumbnail} />
                    </Link>
                    {/* MAP WILL GO HERE*/}
                    {/* EDIT AND DELETE ICONS WILL GO HERE */}
                    <div className="route-index-item-stats">
                        <ul className="route-index-ul">
                            <div className="route-name">
                                <Link to={`routes/${this.props.route.id}`}>{this.props.route.name}</Link>
                            </div>

                            <div className="stat-list">
                                <section>
                                    <h2>{this.props.route.distance}
                                        <abbr title="Miles"> mi</abbr><br />
                                        <label>Distance</label>
                                    </h2>
                                </section>

                                <section>
                                    <h2>{this.props.route.elevation}
                                        <abbr title="Feet"> ft</abbr><br />
                                        <label>Elevation</label>
                                    </h2>
                                </section>
                            </div>
                            <label>Est. Moving Time  </label>
                            {this.timeConverter(this.props.route.time)}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}


export default RouteIndexItem;