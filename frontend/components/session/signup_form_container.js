import { connect } from "react-redux";
import SessionForm from "./session_form"
import { signup } from "../../actions/session_actions"
import { openModal, closeModal } from "../../actions/modal_actions"
import { login } from "../../actions/session_actions"
import { clearErrors } from '../../actions/error_actions';



//////    MAP UPDATEUSER TO PROPS THEN MAKE CREATE USERS REDIRECT TO DIFFERNT PAGE TO UPDATE USER PROFILE



const mapStateToProps = (state, ownProps) => { //state.errors.session.errors = array
    // debugger
    return ({
        errors: state.errors.session,
        formType: "signup"
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        processForm: (user) => dispatch(signup(user)),
        openModal: (modalType) => dispatch(openModal(modalType)),
        loginDemo: () => dispatch(login({ username: "demo", password: "password" })),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    })
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return ({
//         processForm: (user) => dispatch(signup(user)),
//         updateUser: (user) => dispatch(updateUser(user)),
        // openModal: (modal) => dispatch(openModal(modal)),
        // closeModal: () => dispatch(closeModal())
//     })
// }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);