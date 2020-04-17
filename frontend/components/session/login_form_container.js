import { connect } from "react-redux";
import SessionForm from "./session_form"
import { login } from "../../actions/session_actions"
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => { //state.errors.session.errors = array
    // debugger
    return ({
        errors: state.errors.session,
        formType: "login"
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        loginDemo: () => dispatch(login({ username: "demo", password: "password" })),
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);