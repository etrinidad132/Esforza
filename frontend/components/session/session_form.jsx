import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props); // errors array, formType, processForm(), loginDemo
    this.state = {
      username: "",
      password: "",
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(type) {
    return (e) =>
      this.setState({
        [type]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);

    setTimeout(() => {
      if (!this.props.errors.length > 0) {
        if (this.props.formType === "signup") {
          this.props.openModal("sign up");
        }
      }
    }, 500);
  }

  googleLogin() {
    // debugger
    this.props.loginDemo();
  }

  render() {
    // debugger
    let formText = "";
    let optionalLink = "";
    let optionalText = "";
    if (this.props.formType === "login") {
      formText = "Log In";
      optionalLink = "/signup";
      optionalText = "Sign Up";
    } else {
      formText = "Sign Up";
      optionalLink = "/login";
      optionalText = "Log In";
    }

    let errorLi = [];

    if (this.props.errors.length > 0) {
      // debugger
      errorLi = this.props.errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
      });
    }

    return (
      <>
        <div className="form-container">
          <h3 className="form-type">{formText}</h3>
          <form>
            <a className="google" onClick={this.googleLogin}>
              {formText} using Demo
            </a>
            <h3>Or {formText} With a Username</h3>
            {/* <label>Username */}
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Your Username"
            />
            {/* </label> */}
            <br />
            {/* <label>Password */}
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <ul className="session-errors">{errorLi}</ul>
            {/* </label> */}
            <br />
            <button onClick={this.handleSubmit}>{formText}</button>
          </form>

          {/* <Link to={optionalLink}>{optionalText}</Link> */}
        </div>
      </>
    );
  }
}

export default SessionForm;
