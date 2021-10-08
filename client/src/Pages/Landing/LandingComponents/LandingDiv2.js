import React from 'react'
import LandingImage from "./LandingImages/landingImage.png"
import './landingDiv2.css'

function LandingDiv2() {
  return (
    <div className="container">
      <div className="row welcome-section">
        <div className="col-md-6 col-12 align-middle landing-message" style={{verticalAlign: "middle"}}>
          <p>
            Grow your business by managing all orders from one place 
          </p> 
          <div className="start-button text-center p-3">
            <button href="./register">
              <a href="./register">Get Started </a>
            </button> 
          </div>   
        </div>
        <div className="col-md-6 col-12 landing-image text-center p-4">
          <img className="img-fluid" alt="landing image, single person managing all traffic" src={LandingImage}></img>
        </div>
      </div>
    </div>
  )
}

export default LandingDiv2
