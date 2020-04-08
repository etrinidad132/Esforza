import { connect } from "react-redux";
import SignupModal from "./sign_up_modal"
import { closeModal } from "../../actions/modal_actions"
import { updateUser } from "../../actions/user_actions"

const msp = (state) => ({
    modal: state.ui.modal[0],
    user: state.entities.users[state.session.id]

})

const mdp = (dispatch) => ({
    updateUser: (user) => dispatch(updateUser(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(SignupModal)