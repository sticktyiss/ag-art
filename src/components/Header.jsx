import React from "react";
import { NavLink } from "react-router-dom";
// TODO: npm i react-router-dom

import logo from '../images/agart-zoomed.jpg'

const Header = () => {
  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "" : "", //TODO: Style this out
    };
  };

  const scroll = () => window.scrollTo(0, 0);

  return (
    <div>
      <img src={logo} alt="logo" />
      <h1>Alora Goodman</h1>
      <nav>
        <NavLink style={styleActiveLink} to='/'>Home</NavLink>
        <NavLink style={styleActiveLink} to='gallery'>Gallery</NavLink>
        <NavLink style={styleActiveLink} to='about'>About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
