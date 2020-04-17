import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <section className='logo-column'>
                    <h3 className='footer-logo'>ESFORZA</h3>
                </section>
                <section className='follow-column'>
                    <h3>FOLLOW</h3>
                    <div>
                        <a
                            href="https://github.com/etrinidad132/"
                            target="_blank"
                            className="personal-adver">
                            GITHUB
                            </a>
                    </div>
                </section>
                <section className='start-column'>
                    <h3>GET STARTED</h3>
                    <div><Link to="/signup">SIGN UP</Link></div>
                    <div><Link to="/login">LOG IN</Link></div>
                </section>
            </div>
        </footer>
    )
}
