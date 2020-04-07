import React from "react";
import { Link } from "react-router-dom";
// import { receiveErrors } from "../../actions/session_actions";

const Greeting = (props) => { // currentUser, logout, receiveErrors()

    if (props.currentUser instanceof Array) {
        // debugger
        props.receiveErrors(props.currentUser);
        return (
            <>
                <Link to="/login"> Log In </Link>
                <Link to="/signup"> Sign Up </Link>
            </>
        )
    } else if (typeof props.currentUser === "object") {
        // debugger
        return (
            <>
                <h3>Hello! {props.currentUser.username}</h3>
                <button className="logout-button" onClick={props.logout}>Log Out</button>
            </>
        )
    } else {
        return (
            <>
                <Link to="/login"> Log In </Link>
                <Link to="/signup"> Sign Up </Link>
            </>
        )
    }

}

export default Greeting;