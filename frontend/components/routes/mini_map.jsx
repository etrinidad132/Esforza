import React from "react";
import { withRouter } from "react-router-dom";

class MiniMap extends React.Component {
    constructor(props) {// (markers = Object.values(locations))
        super(props)
        this.markersArray = [];
        this.state = {
            coordinates: []
        }

        this.placeMarker = this.placeMarker.bind(this);
        this.displayRoute = this.displayRoute.bind(this);
    }
    componentDidMount() {
        const mapElement = document.getElementById("minimap");
        const center = { lat: 40.7362791, lng: -73.9941211 }; // NYC a/A Campus

        this.map = new google.maps.Map(mapElement, {
            zoom: 15,
            center: center
        })
        this.directionsService = new google.maps.DirectionsService;
        this.directionsRenderer = new google.maps.DirectionsRenderer({ map: this.map });

        // debugger
        // setTimeout(() => {
        //     this.props.locations.filter(location => location.route_id === parseInt(this.props.match.params.routeId))
        //     .sort((x, y) => Math.sign(x.order > y.order))
        //     .forEach(marker => {
        //         debugger
        //         this.placeMarker({
        //             lat: marker.lat, lng: marker.lng
        //         })
        //     })
        // }, 1200);
        setTimeout(() => {
            const filtered = this.props.locations.filter(location => location.route_id === parseInt(this.props.match.params.routeId))
            // debugger
            filtered.sort((x, y) => Math.sign(x.order > y.order))
            .forEach(marker => {
                // debugger
                this.placeMarker({
                    lat: marker.lat, lng: marker.lng
                })
            })
        }, 1200);
        // setTimeout(() => this.props.locations.filter(marker => {
        //     debugger
        //     const that = this
        //     return (marker.route_id === parseInt(that.props.match.params.routeId))
        //         .sort((x, y) => Math.sign(x - y)).forEach(marker => {
        //             debugger
        //             return (that.placeMarker({// make this first
        //                 lat: marker.lat,
        //                 lng: marker.lng
        //             }))
        //         })
        // }), 1500);
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.markers !== this.props.markers) {
            this.setState({ markers: this.props.markers })
        }
    }

    placeMarker(location) {
        // const l = location;
        // debugger
        const marker = new google.maps.Marker({ position: location });

        marker.setMap(this.map);

        this.markersArray.push(marker);

        // this.previousActions.push({
        //     action: 'mark',
        //     markers: marker
        // })

        if (this.markersArray.length > 1) {
            this.markersArray.forEach(marker => marker.setMap(null));
            const lastPosition = this.markersArray.length - 1;
            this.displayRoute(// make this second
                this.markersArray[0].position,
                this.markersArray[lastPosition].position,
                this.markersArray.slice(1, lastPosition),
                this.directionsService,
                this.directionsRenderer
            )
        }
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
                // debugger
                if (status === "OK") {
                    directionsRender.setDirections(response)
                } else {
                    alert(`Something went wrong due to ${status}`)
                }
            })
    }

    render() {
        return (
            <div id="minimap"></div>
        )
    }
}

export default withRouter(MiniMap);