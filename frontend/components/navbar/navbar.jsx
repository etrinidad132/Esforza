import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e) {
        e.preventDefault;
        this.props.logout();
    }

    render() {
        const newRoute = "/routes/new"
        const editRoute = "/routes/edit/"
        // debugger
        if (this.props.location.pathname.includes(newRoute) ||
            this.props.location.pathname.includes(editRoute)) {
            return null;
        }

        const dropdownRight = this.props.currentUser ? (
            <ul className="drop-submenu-profile">
                <li className="drop-submenu-item ">
                    {/* Will Link to user show page once this is built */}
                    <a className="personal" href="https://github.com/etrinidad132/">My GitHub Profile</a>
                </li>
                <li className="drop-submenu-item ">
                    <Link className="drop-submenu-item" to="/routes/new">Create a Route</Link>
                </li>
                <li className="drop-submenu-item ">
                    <a onClick={this.logout}>Logout</a>
                </li>
            </ul>
        ) : null;

        const navRight = this.props.currentUser ? (
            <div className="navbar-right-side">
                <span>
                    <nav className="drop-right">
                        <ul className="drop-menu">
                            <a className="tab-header">{'Account \u2228'}</a>
                            {dropdownRight}
                        </ul>
                    </nav>
                </span>
            </div>
        ) : (
                <div className="navbar-right-side">
                    <span>
                        <Link className="btn" to="/signup">Sign Up</Link>
                    </span>
                    <span>
                        <Link className="btn" to="/login">Log In</Link>
                    </span>
                </div>
            );

        const dropdownLeft = (
            <ul className="drop-submenu-dash dash">
                <li className="drop-submenu-item">
                    <Link className='drop-submenu-item' to='/dashboard'>Activity Feed</Link>
                </li>
                <li className="drop-submenu-item">
                    <Link className="drop-submenu-item" to="/routes">My Routes</Link>
                </li>
            </ul>
        );

        const navLeft = this.props.currentUser ? (
            <div className="navbar-left-side">
                <span>
                    <nav className="drop">
                        <ul className="drop-menu orange">
                            <a className="tab-header">{'Dashboard \u2228'}</a>
                            {dropdownLeft}
                        </ul>
                    </nav>
                </span>
            </div>
        ) : null;

        const navbar = (<div className="navbar-main">
            <Link className="logo" to="/dashboard">ESFORZA</Link>
            <section className="navbar-side">
                <section>
                    {navLeft}
                </section>
                <section>
                    {navRight}
                </section>
            </section>
        </div>
        );

        return (
            <div>
                {navbar}
            </div>
        );
    }
}

export default withRouter(NavBar);




// import React from "react";
// import { Link, withRouter } from "react-router-dom";
// // import { receiveErrors } from "../../actions/session_actions";

// class NavBar extends React.Component { // currentUser, logout, receiveErrors()
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         const newRoute = "/routes/new"
//         const editRoute = "/routes/edit/"
//         // debugger
//         if (this.props.location.pathname.includes(newRoute) ||
//             this.props.location.pathname.includes(editRoute)) {
//             return null;
//         }


//         let element;
//         if (this.props.currentUser instanceof Array) {
//             // debugger
//             this.props.receiveErrors(this.props.currentUser);
//             element = (
//                 <>

//                     <Link to="/login"> Log In </Link>
//                     <Link to="/signup"> Sign Up </Link>
//                 </>
//             )
//         } else if (typeof this.props.currentUser === "object") {
//             // debugger
//             element = (
//                 <>

//                     <h3>Hello! {this.props.currentUser.fname}</h3> {/* user image will go here */}
//                     <button className="logout-button" onClick={this.props.logout}>Log Out</button>
//                 </>
//             )
//         } else {
//             element = (
//                 <>
//                     <Link to="/login"> Log In </Link>
//                     <Link to="/signup"> Sign Up </Link>
//                 </>
//             )
//         }

//         return (
//             <header className="header" >
//                 <div className="container header-content">
//                     {/* <h1 className="logo">ESFORZA</h1> */}
//                     <Link className="logo" to="/dashboard">ESFORZA</Link>
//                     {/* <Link className="logo" to="/dashboard">ESFORZA</Link> */}

//                     <nav className="main-nav">
//                         {element}
//                     </nav>
//                 </div>Î
//             </header>
//         )
//     }
// }

// export default withRouter(NavBar);