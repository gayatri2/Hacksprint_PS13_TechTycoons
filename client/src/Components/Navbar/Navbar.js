import React from "react";
import "./Navbar.css";
import Burger from "./Burger/burger";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to='/'><div className="logo">Hacksprint</div></ NavLink > 
      <Burger />
    </div>
  );
};

export default Navbar;
