import React from "react";
import "./Navbar.css";
import Burger from "./Burger/burger";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to='/' style={{textDecoration:"none",fontFamily:"Birthstone",marginTop:"-20px"}}><div className="logo">hub4food</div></ NavLink > 
      <Burger />
    </div>
  );
};

export default Navbar;
