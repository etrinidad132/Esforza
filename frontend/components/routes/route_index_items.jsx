import React from "react";
import { Link } from "react-router-dom"

class RouteIndexItem extends React.Component {
    constructor(props) {
        super(props)// route, updateRoute, destroyRoute, key

        this.timeConverter = this.timeConverter.bind(this)
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
    // https://www.google.com/maps/@40.8357361,-73.9465457,19.53z
    render() {
        return (
            <>
                <div className="route-index-item-container">
                    {/* <h1>Hello from Route Index Items</h1> */}
                    <Link to={`routes/${this.props.route.id}`}>
                        <img className="map-thumbnail" src="https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80462,-122.41656&markers=label:E%7C37.79795,-122.42374000000001&path=color:0x0000ff80|weight:2|enc:{uveFnndjV}@zAi@x@Dh@HdATpDb@fHj@vHh@dIf@xHrJkAjDa@XG`D]~ASpDe@fFm@&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko"/>
                    </Link>
                    {/* MAP WILL GO HERE*/}
                    {/* EDIT AND DELETE ICONS WILL GO HERE */}
                    <div className="route-item-stats">
                        <ul className="route-index-ul">
                            <div className="route-name">
                                <Link to={`routes/${this.props.route.id}`}>{this.props.route.name}</Link>
                            </div>

                            <div className="stat-list">
                                <section>
                                    <h2>{this.props.route.distance}
                                        <abbr title="Miles">mi</abbr>
                                        <label>Distance</label>
                                    </h2>
                                </section>

                                <section>
                                    <h2>{this.props.route.elevation}
                                        <abbr title="Feet">ft</abbr>
                                        <label>Elevation</label>
                                    </h2>
                                </section>
                            </div>
                            <label>Est. Moving Time</label>
                            {this.timeConverter(this.props.route.time)}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}


export default RouteIndexItem;