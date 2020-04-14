import React from 'react';
import { withRouter } from 'react-router-dom';

class RouteUpdate extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            id: props.prevRoute.id,
            user_id: props.currentUser.id,
            name: props.prevRoute.name,
            description: props.prevRoute.description,
            distance: props.routeInfo.distance,
            time: props.routeInfo.time,
            elevation: props.routeInfo.elevation,
            thumbnail: props.routeInfo.thumbnail,
            activity_type: "ride",
            route_type: "road"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.previousMarkers.forEach(location => {
            this.props.deleteLocation(location.id)
        })



        const that = this;
        this.props.updateRoute(this.state)
            .then(res => {
                // debugger
                that.props.routeInfo.coordinatesArray.forEach(coordinate => {
                    // debugger
                    that.props.createLocation({
                        route_id: res.route.id,
                        sequence: coordinate.sequence,
                        lat: coordinate.lat,
                        lng: coordinate.lng,
                    })
                })
                this.props.closeModal();
                return res;
            }).then(res => this.props.history.push(`/routes/${res.route.id}`));
    }
    // handleSubmit(e) {
    //     e.preventDefault();
    //     // debugger
    //     const that = this;
    //     this.props.createRoute(this.state)
    //         .then(res => {
    //             // debugger
    //             that.props.routeInfo.coordinatesArray.forEach(coordinate => {
    //                 // debugger
    //                 that.props.createLocation({
    //                     route_id: res.route.id,
    //                     sequence: coordinate.sequence,
    //                     lat: coordinate.lat,
    //                     lng: coordinate.lng,
    //                 })
    //             })
    //             this.props.closeModal();
    //             return res;
    //         }).then(res => this.props.history.push(`/routes/${res.route.id}`));
    // }

    update(field) {
        // debugger
        return (event) => {
            this.setState({ [field]: event.target.value });
        };
    }

    renderErrors() {
        return (
            <div className="save-errors">
                {this.props.errors.map((error, i) => (
                    <ul>
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    </ul>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div className='route-save-modal'>
                <section className='save-header'>
                    <h1>Save</h1>
                </section>
                <section className='save-main'>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            Enter a name and description for your route below. On the next page, you'll be able to see, edit, and share your route.
                        </p>
                        <div className='inline-row'>
                            <section className='route-save-label-parent'>

                                <label>Ride Type</label>
                                <select
                                    name="types"
                                    className='selectbox'
                                    value={this.state.route_type}
                                    onChange={this.update("route_type")}>

                                    <option defaultValue="road" >Road</option>
                                    {/* <option value="road" selected>Road</option> */}
                                    <option value="MTB">MTB</option>
                                    <option value="cyclocross">Cyclocross</option>
                                    <option value="trail">Trail</option>
                                </select>
                            </section>
                            <section className='route-save-label-parent'>
                                <label>Route Name (required)</label>
                                <input className='route-save-name' type="text" value={this.state.name} onChange={this.update('name')} />
                                {this.renderErrors()}
                            </section>
                        </div>
                        <section className='route-save-label-parent-description'>
                            <label>Description</label>
                            <textarea type="text" value={this.state.description} onChange={this.update('description')} />
                        </section>
                        <input className='modal-save-btn' type="submit" value='Save' />
                    </form>
                </section>
            </div>
        )
    }
}

export default withRouter(RouteUpdate);
