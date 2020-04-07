import React from "react";
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props) {
        super(props) // errors array, formType, processForm()
        this.state = {
            username: "",
            password: ""
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);

        if (this.props.formType === "signup") {
            this.props.openModal("sign up")
        }
    }


    render() {
        // debugger
        let buttonText = "";
        let optionalLink = "";
        let optionalText = "";

        if (this.props.formType === "login") {
            buttonText = "Log In";
            optionalLink = "/signup";
            optionalText = "Sign Up";
        } else {
            buttonText = "Sign Up";
            optionalLink = "/login";
            optionalText = "Log In";
        }

        let errorLi = [];

        if (this.props.errors.length > 0) {
            // debugger
            errorLi = this.props.errors.map((error, idx) => {
                return (
                    <li key={idx}>{error}</li>
                )
            })
        }

        return (
            <>
                <form>
                    <label>Username
                    <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username" />
                    </label><br />
                    <label>Password
                    <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password" />
                    </label><br />
                    <button onClick={this.handleSubmit}>{buttonText}</button>
                </form>

                <ul>{errorLi}</ul>

                <Link to={optionalLink}>{optionalText}</Link>
            </>
        )
    }
}

export default SessionForm;