import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./css/Header.module.css";
import { useNavigate } from "react-router-dom";

import logo from "../images/agart-zoomed.jpg";

const Header = () => {
  const navigate = useNavigate();

  const styleActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "#b1be4d" : "#93b341", //TODO: Style this out
    };
  };

  const scroll = () => window.scrollTo(0, 0);

  return (
    <header className={classes.header}>
      {/* <img src={logo} alt="logo" /> */}
      <h1 onClick={() => navigate("/")}>Alora G Art</h1>
      <nav>
        <ul>
          <li>
            <NavLink style={styleActiveLink} to="/" onClick={scroll}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={styleActiveLink} to="gallery" onClick={scroll}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink style={styleActiveLink} to="about" onClick={scroll}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
