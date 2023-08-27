import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./css/Header.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import img1 from "../images/walkway3.jpg";
import img2 from "../images/pookie.jpg";
import img3 from "../images/walkway2.jpg";
import img4 from "../images/railwave.jpg";
import img5 from "../images/walkway1.jpg";
import img6 from "../images/giraffe.jpg";
import img7 from "../images/car.jpg";
import img8 from "../images/lighthouse.jpg";
import img9 from "../images/matt.jpg";
import img10 from "../images/ocean.jpg";



const Header = () => {
  const navigate = useNavigate();

  const scroll = () => window.scrollTo(0, 0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
