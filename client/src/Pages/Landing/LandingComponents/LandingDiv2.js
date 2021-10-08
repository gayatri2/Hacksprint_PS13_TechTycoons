import React from 'react'
import LandingImage from "./landingImage.png"
import './landingDiv2.css'
function LandingDiv2() {
  return (
    <div className="container">
      <div className="row welcome-section">
        <div className="col-6 landing-message">
          <p>
            Grow your business by managing all orders from one place 
          </p>       
        </div>
        <div className="col-6  landing-image">
          <img src={LandingImage}></img>
        </div>
      </div>
    </div>
  )
}

export default LandingDiv2
