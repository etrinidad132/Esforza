import React from "react";


class SignupModal extends React.Component {
    constructor(props) {
        super(props) // updateUser, user
        this.emptyFormState = {
            fname: "",
            lname: "",
            birthday: "",
            gender: ""
        };

        this.state = this.emptyFormState;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const user = Object.assign({}, this.props.user, this.state);
        this.props.updateUser(user)// will be called
        this.props.closeModal()
        this.clearForm()
        // this.props.processForm(user);
    }

    clearForm() {
        this.setState({
            fname: "",
            lname: "",
            birthday: "",
            gender: ""
        })
    }

    render() {
        // debugger
        if (!this.props.modal) {
            // debugger
            return null
        } else if (this.props.modal !== "sign up") {
            return null;
        }

        return (
            // <div className="modal-background" onClick={this.props.closeModal}>
            <div className="modal-background" >
                <div className="modal-container">


                    <form className="modal-form" onSubmit={this.handleSubmit}>
                        <h2>Create your profile</h2>
                        <h3>This will give you a place to store workouts and help your friends find you.</h3>
                        <label className="modal-label">First Name<br />
                            <input
                                className="modal-input"
                                type="text"
                                value={this.state.fname}
                                onChange={this.update("fname")}
                            />
                        </label>

                        <label className="modal-label">Last Name<br />
                            <input
                                className="modal-input"
                                type="text"
                                value={this.state.lname}
                                onChange={this.update("lname")}
                            />
                        </label><br />

                        <label className="modal-label">Birthday<br />
                            {/* <input className="modal-input" type="text" />   */}
                            <input
                                className="modal-input"
                                type="date"
                                value={this.state.birthday}
                                onChange={this.update("birthday")}

                            />
                        </label>

                        <label className="modal-label">Gender<br />
                            {/* <input className="modal-input" type="text" /> */}
                            <select
                                value={this.state.gender}
                                onChange={this.update("gender")}
                            >
                                <option value=""> </option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </label><br />

                        <button className="modal-button">Continue</button>

                    </form>
                 </div>
            </div>
        )
    }
}
export default SignupModal;

// // need more brain power
// import React from "react";


// class SignupModal extends React.Component {
//     constructor(props) {
//         super(props) // updateUser, user
//         this.emptyFormState = {
//             fname: "",
//             lname: "",
//             birthday: "",
//             gender: ""
//         };

//         this.state = this.emptyFormState;

//         this.update = this.update.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.clearForm = this.clearForm.bind(this);
//     }

//     update(type) {
//         return e => this.setState({
//             [type]: e.currentTarget.value
//         });
//     }

//     handleSubmit(e) {
//         // debugger
//         e.preventDefault();
//         const user = Object.assign({}, this.props.user, this.state);
//         this.props.updateUser(user)// will be called
//         this.props.closeModal()
//         this.clearForm()
//         // this.props.processForm(user);
//     }

//     clearForm() {
//         this.setState({
//             fname: "",
//             lname: "",
//             birthday: "",
//             gender: ""
//         })
//     }

//     render() {
//         // debugger
//         if (!this.props.modal) {
//             // debugger
//             return null
//         } else if (this.props.modal !== "sign up") {
//             return null;
//         }

//         return (
//             // <div className="modal-background" onClick={this.props.closeModal}>
//             <div className="modal-background" >
//                 <div className="modal-container">

//                     <div className="route-save-modal">
//                         <section className='save-header'>
//                             <h1>Create your profile</h1>
//                         </section>
//                         <section className='save-main'>
//                             <form onSubmit={this.handleSubmit}>
//                                 <p>This will give you a place to store workouts and help your friends find you.</p>
//                                 <div className='inline-row'>
//                                     <section className='route-save-label-parent'>
//                                         <label>First Name</label>
//                                         <input
//                                             className="modal-input"
//                                             type="text"
//                                             value={this.state.fname}
//                                             onChange={this.update("fname")}
//                                         />
//                                     </section>
//                                     <section className='route-save-label-parent'>
//                                         <label>Last Name</label>
//                                         <input
//                                             className="modal-input"
//                                             type="text"
//                                             value={this.state.fname}
//                                             onChange={this.update("lname")}
//                                         />
//                                     </section>
//                                 </div>

//                                 <label className="modal-label">Birthday<br />
//                                     {/* <input className="modal-input" type="text" />   */}
//                                     <input
//                                         className="modal-input"
//                                         type="date"
//                                         value={this.state.birthday}
//                                         onChange={this.update("birthday")}

//                                     />
//                                 </label>

//                                 <label className="modal-label">Gender<br />
//                                     {/* <input className="modal-input" type="text" /> */}
//                                     <select
//                                         value={this.state.gender}
//                                         onChange={this.update("gender")}
//                                         className='selectbox'
//                                     >
//                                         <option value=""> </option>
//                                         <option value="M">Male</option>
//                                         <option value="F">Female</option>
//                                         <option value="Other">Other</option>
//                                     </select>
//                                 </label><br />

//                                 <button className="modal-button">Continue</button>

//                             </form>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default SignupModal;
