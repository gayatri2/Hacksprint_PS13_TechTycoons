import React from "react";
import "./landingHeader.css";
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
            <a className="" href="/login">
              Login
            </a>
          </li>
          <li>
            <a className="" href="/register">
              Signup
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default LandingHeader;