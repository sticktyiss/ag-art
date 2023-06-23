import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./css/Header.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "../images/agart-zoomed.jpg";

const Header = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "#24153b" : "#24153b", //TODO: Style this out
    };
  };

  const scroll = () => window.scrollTo(0, 0);

  return (
    <header className={classes.header}>
      {/* <img src={logo} alt="logo" /> */}
      <h1 onClick={() => navigate("/")}>Alora G Art</h1>
      <nav>
        <NavLink style={styleActiveLink} to="/" onClick={scroll}>
          Home
        </NavLink>
        <NavLink style={styleActiveLink} to='gallery' onClick={() => setShowMenu(!showMenu)}>
          Gallery
        </NavLink>
        {/* {showMenu ? (
          <div className="dropDownMenu">
            <NavLink to="paintings" onClick={scroll}>
              Paintings
            </NavLink>
            <NavLink to="Drawings" onClick={scroll}>
              Drawings
            </NavLink>
            <NavLink to="photography" onClick={scroll}>
              Photography
            </NavLink>
          </div>
        ) : (
          ""
        )} */}
        <NavLink style={styleActiveLink} to="about" onClick={scroll}>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
