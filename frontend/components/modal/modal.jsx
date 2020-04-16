import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import RouteSaveContainer from "../routes/route_save_container";
import RouteUpdateContainer from "../routes/route_update_container";


class Modal extends React.Component {
    constructor(props) {
        super(props); //closeModal, routeInfo(coming from route new / edit), currentUser, previousMarkers
    }

    render() {
        // const { closeModal, routeInfo, currentUser, previousMarkers } = this.props;
        if (!this.props.modal) {
            return null;
        }

        switch (this.props.modal) {
            case 'saveRoute':
                // debugger
                this.component = <RouteSaveContainer routeInfo={this.props.routeInfo} />;
                break;
            case 'updateRoute':
                // debugger
                this.component = <RouteUpdateContainer
                    routeInfo={this.props.routeInfo}
                    prevRoute={this.props.prevRoute}
                    previousMarkers={this.props.previousMarkers} />;
                break;
            default:
                return null;
        }

        return (
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {this.component}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal[0],//good
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())//good
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
