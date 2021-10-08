import React from "react";
import "./landingHeader.css";
import {NavLink} from 'react-router-dom'

function LandingHeader() {
  return (
    <header>
      <nav className="header-nav col-12">
        <a className="landing-header-title">
          {/* <img src="https://storage.mindeskvr.com/static/mindesk-logo-white-50.png" /> */}
          APP-NAME
        </a>
        <ul className="">
          <li>
            <NavLink to='/login'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to='/register'>
              Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default LandingHeader;