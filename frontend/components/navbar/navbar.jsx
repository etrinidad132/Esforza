import React from "react";
import { Link, withRouter } from "react-router-dom";
// import { receiveErrors } from "../../actions/session_actions";

class NavBar extends React.Component { // currentUser, logout, receiveErrors()
    constructor(props) {
        super(props)
    }

    render() {
        const newRoute = "/routes/new"
        // debugger
        if (this.props.location.pathname.includes(newRoute)) {
            return null;
        } 


        let element;
        if (this.props.currentUser instanceof Array) {
            // debugger
            this.props.receiveErrors(this.props.currentUser);
            element = (
                <>

                    <Link to="/login"> Log In </Link>
                    <Link to="/signup"> Sign Up </Link>
                </>
            )
        } else if (typeof this.props.currentUser === "object") {
            // debugger
            element = (
                <>
                    
                    <h3>Hello! {this.props.currentUser.fname}</h3> {/* user image will go here */}
                    <button className="logout-button" onClick={this.props.logout}>Log Out</button>
                </>
            )
        } else {
            element = (
                <>
                    <Link to="/login"> Log In </Link>
                    <Link to="/signup"> Sign Up </Link>
                </>
            )
        }

        return (
            <header className="header" >
                <div className="container header-content">
                    {/* <h1 className="logo">ESFORZA</h1> */}
                    <Link className="logo" to="/routes">ESFORZA</Link>
                    {/* <Link className="logo" to="/dashboard">ESFORZA</Link> */}

                    <nav className="main-nav">
                        {element}
                    </nav>
                </div>Î
            </header>
        )
    }
}

export default withRouter(NavBar);


// import React from "react";
// import { Link } from "react-router-dom";
// // import { receiveErrors } from "../../actions/session_actions";

// const NavBar = (props) => { // currentUser, logout, receiveErrors()

//     if (props.currentUser instanceof Array) {
//         // debugger
//         props.receiveErrors(props.currentUser);
//         return (
//             <>
//                 <Link to="/login"> Log In </Link>
//                 <Link to="/signup"> Sign Up </Link>
//             </>
//         )
//     } else if (typeof props.currentUser === "object") {
//         // debugger
//         return (
//             <>
//                 <h3>Hello! {props.currentUser.username}</h3>
//                 <button className="logout-button" onClick={props.logout}>Log Out</button>
//             </>
//         )
//     } else {
//         return (
//             <>
//                 <Link to="/login"> Log In </Link>
//                 <Link to="/signup"> Sign Up </Link>
//             </>
//         )
//     }

// }

// export default NavBar;