import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./css/Header.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import titleImg from "../images/lavender-1117275.jpg"

import logo from "../images/agart-zoomed.jpg";

import img1 from "../images/ag-art-flower.jpg";
import img2 from "../images/lavender-1117275.jpg";


const Header = () => {
  const navigate = useNavigate();

  const scroll = () => window.scrollTo(0, 0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2];

  const changeBackgroundImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(changeBackgroundImage, 10 * 1000); //Change the first # to change how long image is viewed

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <header className={classes.header}>
      <h1 onClick={() => navigate("/")}>Alora G Art</h1>
      <div style={backgroundImageStyle}/> {/* Image in the header */}
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
