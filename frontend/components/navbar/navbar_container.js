import { connect } from "react-redux";
import NavBar from "./navbar";
import { logout, receiveErrors, login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        loginDemo: () => dispatch(login({ username: "demo", password: "password" })),
        receiveErrors: (errorsArray) => dispatch(receiveErrors(errorsArray))
    });
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);
