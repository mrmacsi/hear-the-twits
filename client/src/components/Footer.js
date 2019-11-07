
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer site-footer light-blue" style={{marginTop:"10px"}}>
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Hear the Twits</h5>
                    <p className="grey-text text-lighten-4">Hearing twits never been that fast and easy.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                        <li><Link className="grey-text text-lighten-3" to="/">Home</Link></li>
                        <li><Link className="grey-text text-lighten-3" to="/twits">Twits</Link></li>
                        <li><Link className="grey-text text-lighten-3" to="/logs">Logs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container center-align">
                © 2019 Copyright Hear the Twits
            </div>
        </div>
    </footer>
  );
};

export default Footer;
