import React from 'react'
import Img from '../../assets/Capture.PNG';

function Menu() {
  return (
    <div className='menu-card text-center' >
      <img className='img-fluid ' src={Img} style={{marginTop:"15px",marginBottom:"10px",width:"500px",height:"800px"}}></img>
    </div>
  );
}

export default Menu;
