import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./css/Header.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import titleImg from "../images/lavender-1117275.jpg"

import logo from "../images/agart-zoomed.jpg";

const Header = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "white" : "white", //TODO: Style this out
    };
  };

  const scroll = () => window.scrollTo(0, 0);

  return (
    <header className={classes.header}>
      <h1 onClick={() => navigate("/")}>Alora G Art</h1>
      <div/> {/* Image in the header */}
      <nav>
        <NavLink style={styleActiveLink} to="/" onClick={scroll}>
          Home
        </NavLink>
        <NavLink style={styleActiveLink} to='gallery' onClick={() => setShowMenu(!showMenu)}>
          Gallery
        </NavLink>
        <NavLink style={styleActiveLink} to="about" onClick={scroll}>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
