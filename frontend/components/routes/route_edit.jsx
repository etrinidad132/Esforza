
import React from "react";
import Modal from "../modal/modal"
import { Link } from "react-router-dom";

class RouteEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coordinatesArray: [],
            create: false
        }

        this.markersArray = [];
        this.previousMarkersArray = [];
        this.previousActions = [];

        this.placeMarker = this.placeMarker.bind(this);
        this.drawRoute = this.drawRoute.bind(this);
        this.displayRoute = this.displayRoute.bind(this);
        this.plotElevation = this.plotElevation.bind(this);
        this.createUrl = this.createUrl.bind(this);
        this.calcTotalDistance = this.calcTotalDistance.bind(this);
        this.clear = this.clear.bind(this);
        this.undo = this.undo.bind(this);
        this.redo = this.redo.bind(this);
        this.save = this.save.bind(this);
        this.clearStatistics = this.clearStatistics.bind(this);
    }

    componentDidMount() {

        //pseudo code for future feature
        // let center = { lat: 40.7362791, lng: -73.9941211 }
        // if (currentUser) {
        //     center = lat and lng based on the currentUser.location(zipcode)
        // }
        //////////////////////////////////////////////////////////////////////

        const center = { lat: 40.7362791, lng: -73.9941211 }; // NYC a/A Campus, at least I think

        this.map = new google.maps.Map(this.refs.map, {
            zoom: 13,
            center: center
        })

        this.elevationService = new google.maps.ElevationService;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsRenderer = new google.maps.DirectionsRenderer({ map: this.map });
        // const that = this;
        // debugger
        google.maps.event.addListener(this.map, "click", (event) => {
            // debugger
            const latLng = { lat: event.latLng.lat(), lng: event.latLng.lng() };
            this.placeMarker(latLng);// places markers on map
        })

        this.directionsRenderer.addListener("directions_changed", (that) => {
            // debugger
            const route = this.markersArray.map(marker => {
                return ({
                    lat: marker.getPosition().lat(),
                    lng: marker.getPosition().lat()
                })
            })
            const elevation = this.elevationService;
            const directions = this.directionsRenderer.getDirections();

            // debugger
            if (directions !== null) {
                // debugger
                // this.elevationService.getElevationAlongPath({// asynch request that returns a response, and give it to the callback
                elevation.getElevationAlongPath({// asynch request that returns a response, and give it to the callback
                    path: route,
                    samples: 5
                }, this.plotElevation)// the call back // calculates elevation

                this.createUrl(directions); // creates map thumbnail
                this.calcTotalDistance(directions); // calculates the distance
            }
        })

        setTimeout(() => this.props.previousMarkers.sort((x, y) => Math.sign(x.sequence - y.sequence))
            .forEach(marker => {
                this.placeMarker({
                    lat: marker.lat, lng: marker.lng
                })
            }), 1500
        );
    }

    placeMarker(location) {
        // const l = location;
        // debugger
        const marker = new google.maps.Marker({ position: location });

        marker.setMap(this.map);

        this.markersArray.push(marker);

        this.previousActions.push({ 
            action: 'mark', 
            markers: marker 
        })

        if (this.markersArray.length > 1) {
            this.setState({ create: true });
            this.drawRoute(); // draws the route on the map
        }
    }

    drawRoute() {
        this.markersArray.forEach(marker => marker.setMap(null));
        this.displayRoute(// shows the route on the map
            this.markersArray[0].position,
            this.markersArray[this.markersArray.length - 1].position,
            this.markersArray.slice(1, this.markersArray.length - 1),
            this.directionsService, this.directionsRenderer
        )

        this.setState({
            coordinatesArray: this.markersArray.map((marker, index) => {
                // debugger
                return ({
                    lat: marker.getPosition().lat(),
                    lng: marker.getPosition().lng(),
                    sequence: index
                })
            })
        })
    }

    displayRoute(origin, destination, midMarkers, directionsService, directionsRender) {
        // debugger
        directionsService.route({
            origin: origin,
            destination: destination,
            waypoints: midMarkers.map(marker => {
                return ({ location: marker.position })
            }),
            travelMode: "BICYCLING",
            avoidTolls: true
        },

            (response, status) => {// callback

                if (status === "OK") {
                    directionsRender.setDirections(response)
                } else {
                    alert(`Something went wrong due to ${status}`)
                }
            })
    }

    plotElevation(elevationsArray) {
        // debugger
        let total = 0;

        for (let i = 0; i < elevationsArray.length - 1; i++) {
            // let current = elevationsArray[i];
            let current = elevationsArray[1].elevation;
            let next = elevationsArray[i + 1].elevation;

            if (Math.sign(current - next) === -1) {
                total += (next - current);
            }

            const elevation = Math.round(total);

            this.setState({
                elevation: elevation
            })
            // debugger
            let elevationElement = document.getElementById("elevation");
            elevationElement.innerHTML = (elevation + " " + "ft");
        }
    }

    createUrl(directions) {
        // debugger
        const route = directions.routes[0];
        const overviewPath = route.overview_path;
        let thumbnailUrl = `https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C${overviewPath[0].lat()},${overviewPath[0].lng()}&markers=label:E%7C${overviewPath[overviewPath.length - 1].lat()},${overviewPath[overviewPath.length - 1].lng()}`;
        const pathColorUrl = `&path=color:0x000033ff|weight:2|`//this works black
        // const pathColorUrl = `&path=color:0x0000ff80|weight:2|`// this works blue
        const overviewPolyline = `enc:${route.overview_polyline}`;
        const key = `&key=${window.secret}`;

        thumbnailUrl += pathColorUrl + overviewPolyline + key;

        // debugger
        this.setState({
            thumbnail: thumbnailUrl
        });
    }

    calcTotalDistance(directions) {
        // debugger
        let distance = 0;
        const route = directions.routes[0];

        for (let i = 0; i < route.legs.length; i++) {
            distance += route.legs[i].distance.value;
        }

        distance /= 1000;
        distance /= 1.60934;
        const distanceString = distance.toFixed(2); // to limit and stringify float

        const time = (60 * distanceString / 4.43).toFixed(2);
        this.setState({
            time: time,
            distance: distanceString
        })

        // see if there is a better way to do this once you learn more things if you ever come back to this
        const distanceElement = document.getElementById("distance")
        const timeElement = document.getElementById("time");

        distanceElement.innerHTML = distanceString + " " + "mi";
        timeElement.innerHTML = this.timeConverter(time); // make this seventh
    }

    timeConverter(timeMinutes) {
        // debugger
        let sec = timeMinutes % 1;
        let min = Math.floor(timeMinutes % 60);
        const hour = Math.floor(timeMinutes / 60);
        sec = Math.floor(60 * sec);

        if (sec < 10) {
            sec = `0${sec}`;
        }


        if (hour >= 1 && min < 10) {
            min = `0${min}`;
        }

        return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`;
    }

    clear() {
        if (this.markersArray === 0) {
            return;
        }
        this.previousMarkersArray = [];
        this.clearStatistics()
    }

    undo() {
        // debugger
        let lastMarker = this.markersArray[this.markersArray.length - 1];

        if (!lastMarker) {
            return;
        }

        if (this.markersArray.length === 1) {
            this.markersArray.pop().setMap(null);

        } else if (this.markersArray.length === 2) {
            lastMarker = this.markersArray[0];
            const firstMarker = this.markersArray[1];

            this.clearStatistics() // clears the stats
            this.placeMarker(lastMarker.position);
            lastMarker = firstMarker;

        } else if (this.markersArray.length > 2) {
            this.markersArray.pop().setMap(null);
            this.drawRoute();
        }
        this.previousMarkersArray.push({
            action: "undo",
            markers: lastMarker
        });
    }

    redo() {
        // debugger
        if (this.previousMarkersArray.length === 0) {
            return;
        }

        const lastMarker = this.previousMarkersArray[this.previousMarkersArray.length - 1];

        if (lastMarker.action === 'undo') {

            if (lastMarker.markers instanceof Array) {
                this.clear(); // clear stats from the map and clear markers
                this.previousMarkersArray.pop();

            } else {
                this.placeMarker(lastMarker.markers.position);
                this.previousMarkersArray.pop();
            }
        }
    }
    //refactor this/////////////////////
    save(e) {
        // debugger
        e.preventDefault();
        this.props.openModal("updateRoute"); // open's the Edit Route Modal
        ///////////////////////////////
    }

    clearStatistics() {
        // debugger
        document.getElementById("time").innerHTML = "";
        document.getElementById("distance").innerHTML = "";
        document.getElementById("elevation").innerHTML = "";
        this.directionsRenderer.set("directions", null);
        this.markersArray.pop().setMap(null);
        this.markersArray = [];
        this.setState({
            create: false
        })
    }


    render() {
        // debugger
        return (
            <div>
                {/* create new route modal here */}
                {/* <Modal routeInfomation={this.state}/> */}
                {/* <Modal routeInfo={this.state} /> */}
                {/* <Modal routeInfo={this.state} prevRoute={this.props.currentRoute} prevLocations={this.props.prevLocations} /> */}
                <Modal routeInfo={this.state} prevRoute={this.props.currentRoute} previousMarkers={this.props.previousMarkers} />
                {/* <h1 style="font-size=100px">Hi From Map</h1> */}
                <div>
                    <div className="route-navbar">
                        <nav className="route-navbar-left">
                            <Link className="logo" to="/dashboard">ESFORZA</Link>
                            <h1>ROUTE BUILDER</h1>
                        </nav>

                        <nav>
                            <Link className='exit' to='/routes'>Exit Builder</Link>
                        </nav>
                    </div>

                    <div className="route-toolbar">
                        <div className="route-toolbar-left">

                            <div className="toolbar-btn" onClick={this.undo}>{/* undo the previous placed marker */}
                                <div className="toolbar-btn-icon">
                                    <i className="fas fa-undo-alt"></i>{/* see if you can find a different undo button during styling */}
                                </div>

                                <div className="toolbar-btn-label">Undo</div>
                            </div>

                            <div className="toolbar-btn" onClick={this.redo}>{/* replaces the previously undone marker */}
                                <div className="toolbar-btn-icon">
                                    <i className="fas fa-redo-alt"></i>{/* see if you can find a different redo button during styling */}
                                </div>

                                <div className="toolbar-btn-label">Redo</div>
                            </div>

                            <div className='toolbar-btn' onClick={this.clear}>
                                <div className='toolbar-btn-icon'>
                                    <i className="fas fa-times"></i>{/* see if you can find a different times button during styling */}
                                </div>

                                <div className='toolbar-btn-label'>Clear</div>
                            </div>
                        </div>

                        <div>
                            <button
                                className={"btn" + (!this.state.create ? " " + "disabled" : " ")}
                                disabled={!this.state.create}
                                onClick={this.save}>Save Changes{/* updates route to the database */}
                            </button>
                        </div>

                    </div>
                </div>

                <div id="map" ref='map'></div>{/* this is too create an object for the map to hook on to */}
                <div id="stat-panel">
                    <ul className="statistics">
                        <label>Estimated Moving Time
                        <li id="time"></li>
                        </label>

                        <label>Distance
                        <li id="distance"></li>
                        </label>

                        <label>Elevation Gain
                        <li id="elevation"></li>
                        </label>
                        <li id="extender"></li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default RouteEdit;