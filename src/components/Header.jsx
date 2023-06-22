import React from "react";
import { NavLink } from "react-router-dom";
import classes from './css/Header.module.css'

import logo from '../images/agart-zoomed.jpg'

const Header = () => {
  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "#b1be4d" : "#93b341", //TODO: Style this out
    };
  };

  const scroll = () => window.scrollTo(0, 0);

  return (
    <div className={classes.header}>
      {/* <img src={logo} alt="logo" /> */}
      <h1>Alora G Art</h1>
      <nav>
        <NavLink style={styleActiveLink} to='/' onClick={scroll}>Home</NavLink>
        <NavLink style={styleActiveLink} to='gallery' onClick={scroll}>Gallery</NavLink>
        <NavLink style={styleActiveLink} to='about' onClick={scroll}>About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
