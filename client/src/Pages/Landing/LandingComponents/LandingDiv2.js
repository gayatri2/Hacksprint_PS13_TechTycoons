import React from 'react'
import LandingImage from "./LandingImages/landingImage.png"
import './landingDiv2.css'

function LandingDiv2() {
  return (
    <div className="container">
      <div className="row welcome-section">
        <div className="col-md-6 col-12 landing-message">
          <p>
            Grow your business by managing all orders from one place 
          </p> 
          <div className="start-button">
            <button href="./register">
              Get Started
            </button> 
          </div>   
        </div>
        <div className="col-md-6 col-12 landing-image">
          <img src={LandingImage}></img>
        </div>
      </div>
    </div>
  )
}

export default LandingDiv2
