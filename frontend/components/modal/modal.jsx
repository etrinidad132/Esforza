import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import RouteSaveContainer from '../routes/route_save_container';


class Modal extends React.Component {
    constructor(props) {
        super(props); //closeModal, routeInfo(coming from route new), currentUser
    }

    render() {
        // const { closeModal, routeInfo, currentUser } = this.props;
        if (!this.props.modal) {
            return null;
        }

        switch (this.props.modal) {
            case 'saveRoute':
                this.component = <RouteSaveContainer routeInfo={this.props.routeInfo} />;
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
