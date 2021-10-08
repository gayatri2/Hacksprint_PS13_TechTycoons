import React from 'react'
import "./landingDiv3.css"
import Info from "./LandingImages/info1.png"
import Connect from "./LandingImages/connect.png"
import Check from "./LandingImages/check.png"

function LandingDiv3Cards() {
  return (
    <div>
      <div className="container">
        <div style={{textAlign: "center"}}>
          <h2>What can you do here?</h2>
        </div>
        <div className="row">
          <div className="col-md-4 col-12 landing-card">
            <div className="landing-card-details">
              <img src={Connect}></img>
              <h4 class="pt-4">Everything at one place</h4>
              <p>keep track of all incoming orders from different platforms at one place</p>
            </div>
          </div>
          <div className="col-md-4 col-12 landing-card">
            <div className="landing-card-details">
              <img src={Info}></img>
              <h4 class="pt-4"> Immediate invoice generation</h4>
              <p>Automatic total amount calculation of the order and invoice generation</p>
            </div>
          </div>
          <div className="col-md-4 col-12 landing-card">

            <div className="landing-card-details">
              <img src={Check}></img>
              <h4 class="pt-4">Keep tract of inventories</h4>
              <p>Keep tract of all inventory items and manage it regularly</p>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  )
}

export default LandingDiv3Cards
