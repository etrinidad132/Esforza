import React from "react";
import Footer from "./footer"

export default () => {
    return (
        <div className="splash">
            <div className="main-container">
                <h2 className="headline">The #1 app for runners and cyclists</h2>
                {/* img here */}
                <img src={window.splash} />
            </div>
            <Footer />
        </div>
    )
}