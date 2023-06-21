import React from "react";
import { NavLink } from "react-router-dom";
// TODO: npm i react-router-dom

const Header = () => {
  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "" : "", //TODO: Style this out
    };
  };

  const scroll = () => window.scrollTo(0, 0);

  return (
    <div>
      <img src="" />
      <h1>Alora Goodman</h1>
      <nav>
        <NavLink style={styleActiveLink}>Home</NavLink>
        <NavLink style={styleActiveLink}>About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
