import React from 'react';
import { withRouter } from 'react-router-dom';

class RouteSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            name: '',
            description: '',
            distance: this.props.routeInfomation.distance,
            time: this.props.routeInfomation.time,
            elevation: this.props.routeInfomation.elevation,
            thumbnail: this.props.routeInfomation.thumbnail,
            activity_type: "ride",
            route_type: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.createRoute(this.state)
            .then(res => {
                this.props.routeInfomation.coodinatesArray.forEach(coodinate => {
                    this.props.createLocation({
                        route_id: res.payload.routes.id,
                        sequence: coodinate.sequence,
                        lat: coodinate.lat,
                        lng: coodinate.lng,
                    })
                })
                this.props.closeModal();
                return res;
            }).then(res => this.props.history.push(`/routes/${res.payload.routes.id}`));
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
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

                                    <option value="road">Road</option>
                                    <option value="MTB">MTB</option>
                                    <option value="cyclocross">Cyclocross</option>
                                    <option value="road">Road</option>
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

export default withRouter(RouteSave);
