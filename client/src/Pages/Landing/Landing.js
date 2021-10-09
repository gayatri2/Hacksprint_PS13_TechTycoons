import React from "react";
import LandingHeader from "./LandingComponents/LandingHeader";
import LandingDiv2 from "./LandingComponents/LandingDiv2";
import LandingDiv3 from "./LandingComponents/LandingDiv3Cards";

function Landing() {
  return (
    <div>
      {/* <h1>HI</h1> */}

      <LandingHeader />
      <h1 style={{textAlign:"center",fontFamily:"Birthstone",fontSize:"80px",color:"#6958EC"}}>"hub4food"</h1>

      <LandingDiv2 />

      <LandingDiv3 />
    </div>
  );
}

export default Landing;
