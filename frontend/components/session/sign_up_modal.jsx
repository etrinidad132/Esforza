import React from "react";

class SignupModal extends React.Component {
    constructor(props) {
        super(props) // updateUser, user
        this.state = {
            fname: "",
            lname: "",
            birthday: "",
            gender: ""
        }

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
        e.preventDefault();
        const user = Object.assign({}, this.state);
        console.log(user)
        // this.props.updateUser(user) will be called
        this.clearForm()
        // this.props.processForm(user);
    }

    clearForm(){
        this.setState({
            fname: "",
            lname: "",
            birthday: "",
            gender: ""
        })
    }

    render() {
        return (
            <div className="modal-container">

                <h2>Create your profile</h2>
                <h3>This will give you a place to store workouts and help your friends find you.</h3>

                <form className="modal-form" onSubmit={this.handleSubmit}>
                    <label className="modal-label">First Name
                        <input
                            className="modal-input"
                            type="text"
                            value={this.state.fname}
                            onChange={this.update("fname")}
                        />
                    </label>

                    <label className="modal-label">Last Name
                        <input
                            className="modal-input"
                            type="text"
                            value={this.state.lname}
                            onChange={this.update("lname")}
                        />
                    </label><br />

                    <label className="modal-label">Birthday
                        {/* <input className="modal-input" type="text" />   */}
                        <input
                            className="modal-input"
                            type="date"
                            value={this.state.birthday}
                            onChange={this.update("birthday")}

                        />
                    </label>

                    <label className="modal-label">Gender
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
                    </label><br/>

                    <button className="modal-button">Continue</button>

                </form>
            </div>
        )
    }
}

export default SignupModal;