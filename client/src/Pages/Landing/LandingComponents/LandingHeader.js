import React from "react";
import "./landingHeader.css";
import {NavLink} from 'react-router-dom'

import f4u from "./LandingImages/hub4food.png";

function LandingHeader() {
  return (
    <header>
      <nav className="header-nav col-12">
        <a className="landing-header-title">
          <img src={f4u} className="img-fluid" style={{width:"100px", height:"100px"}}/>
          {/* food<span>4</span>hub */}
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