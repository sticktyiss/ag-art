import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./css/Header.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "../images/agart-zoomed.jpg";

const Header = () => {
  const navigate = useNavigate();

  const [dropDownMenu, setDropDownMenu] = useState(false);

  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "#433070" : "#24153b", //TODO: Style this out
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
        <NavLink style={styleActiveLink} to="gallery" onClick={scroll}>
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
