import React from "react";
import { Link } from 'react-router-dom';
import RouteIndexItem from "./route_index_items"

class RouteIndex extends React.Component {
    constructor(props) {// routes, currentUser, fetchRoutes, fetchRoute, createRoute, updateRoute, destroyRoute
        super(props)
        this.state = {}

        // this.deleteRender = this.deleteRender.bind(this)
    }

    componentDidMount() {
        this.props.fetchRoutes()
    }

    timeConverter() {
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

    // deleteRender(routeId) {
    //     debugger
    //     return ((routeId) => {
    //         this.setState({ state: this.state })
    //         debugger
    //         return (this.props.destroyRoute(routeId))
    //     })
    // }

    render() {
        const indexItems = this.props.routes.map(route => {
            return (
                <RouteIndexItem
                    key={route.id}
                    route={route}
                    updateRoute={this.props.updateRoute}
                    destroyRoute={this.props.destroyRoute}
                    // destroyRoute={this.deleteRender}


                />
            )
        })

        return (
            <>
                <div className="route-container">
                    <header className="route-header">
                        <h1>My Routes</h1>
                        <Link className="button-main" to="routes/new">Create New Route</Link>
                    </header>
                    <div className="route-index">
                        {indexItems}
                    </div>
                    {/* <h1>Hello from Route Index</h1> */}
                </div>
            </>
        )
    }
}

export default RouteIndex;