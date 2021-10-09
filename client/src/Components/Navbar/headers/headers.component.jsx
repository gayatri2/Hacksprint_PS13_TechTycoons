import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavContext } from "../../../NavProvider";
import "./headers.component.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  min-width: 70%;
  margin: 0;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: blueviolet;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    padding-top: 3.5rem;
    z-index: 100;
    transition: transform 0.3s ease-in-out;
    li .option {
      color: white;
    }
  }
`;

const RightHeader = () => {
  const {open , toggleOpen} = useContext(NavContext)   
  return(
  <Ul className="main-header" open={open} >
    <li>
      <NavLink
        to="/dashboard#pending"
        className="option"
        activeClassName="active__option"
        onClick={toggleOpen}
        // style={{marginLeft:"690px"}}
      >
        Dashboard
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/menu"
        exact={true}
        className="option"
        activeClassName="active__option"
        onClick={toggleOpen}
      >
        Menu
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/inventory"
        className="option"
        activeClassName="active__option"
        onClick={toggleOpen}
      >
        Inventory
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/contact-us"
        className="option"
        activeClassName="active__option"
        onClick={toggleOpen}
      >
        Contact Us
      </NavLink>
    </li>
    <li>
      <NavLink className="option" activeClassName="active__option" to="/login" onClick={toggleOpen}>
        Logout
      </NavLink>
    </li>
  </Ul>
)};

export default RightHeader;
