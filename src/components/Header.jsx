import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./css/Header.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import titleImg from "../images/lavender-1117275.jpg"

import logo from "../images/agart-zoomed.jpg";

const Header = () => {
  const navigate = useNavigate();

  const scroll = () => window.scrollTo(0, 0);

  return (
    <header className={classes.header}>
      <h1 onClick={() => navigate("/")}>Alora G Art</h1>
      <div/> {/* Image in the header */}
      <nav>
        <NavLink to="/" onClick={scroll}>
          Home
        </NavLink>
        <NavLink to='gallery' onClick={scroll}>
          Gallery
        </NavLink>
        <NavLink to="about" onClick={scroll}>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
