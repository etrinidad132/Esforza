import React from "react";

class RouteNew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coodinatesArray =[],
            create: false
        }

        this.markersArray = [];
        this.previousMarkersArray = [];

        this.placeMarker = this.placeMarker.bind(this);
        this.displayRoute = this.displayRoute.bind(this);
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

        google.maps.event.addListener(this.map, "click", (event) => {
            // debugger
            this.placeMarker(event, latlng);// make this function next
        })
    }

    placeMarker(location) {
        // debugger
        const marker = new google.map.Marker({ position: location });

        marker.setMap(this.map);

        this.markersArray.push(marker);

        if (this.markersArray.length > 1) {
            this.setState({ create: true });
            this.drawRoute(); // make this second
        }
    }

    drawRoute() {
        this.markersArray.forEach(marker => marker.setMap(null));
        this.displayRoute(// this function third
            this.markersArray[0].position,
            this.markersArray[this.markersArray.length - 1].position,
            this.markersArray.slice(1, this.markersArray.length - 1),
            this.directionsService, this.directionsRenderer
        )

        this.setState({
            coodinatesArray: this.markersArray.map((marker, index) => {
                return ({
                    lat: marker.gePosition().lat(),
                    lng: marker.gePosition().lng(),
                    sequence: index
                })
            })
        })
    }

    displayroute(origin, destination, midMarkers, directionsService, directionsRender) {
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
        
        (response, status) =>  {

            if (status === "OK") {
                directionsRender.setDirections(response)
            } else {
                alert(`Something went wrong due to ${status}`)
            }
        })
    }


    render() {
        return (
            <div>
                <h1 style="font-size=100px">Hi From Map</h1>

                <div id="map" ref='map'></div>{/* this is too create an object for the map to hook on to */}
            </div>
        )
    }
}


export default RouteNew;