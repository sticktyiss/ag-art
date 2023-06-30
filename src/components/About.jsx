import React, { useState, useEffect } from "react";

import classes from "./css/About.module.css";

// import images for background
import img1 from "../images/ag-art-flower.jpg";
import img2 from "../images/lavender-1117275.jpg";

const About = () => {
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
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: 'auto',
    height: '90vh',
  };

  return (
    <div className={classes.backgroundCycle} style={backgroundImageStyle}>
      <div>
        <h2>About Me</h2>
        <p>I'm so cool. Look at me and my stuff.</p>
      </div>
    </div>
  );
};

export default About;
