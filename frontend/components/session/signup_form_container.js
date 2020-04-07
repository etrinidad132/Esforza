import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form"
import { signup } from "../../actions/session_actions"

const mapStateToProps = (state, ownProps) => { //state.errors.session.errors = array
    // debugger
    return ({
        errors: state.errors.session,
        formType: "signup"
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        processForm: (user) => dispatch(signup(user))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);