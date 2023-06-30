import React from "react";
import linktree from "../images/linktree-logo.png";

import classes from "./css/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <a href="https://linktr.ee/aloragart">
        <img src={linktree} />
      </a>
    </div>
  );
};

export default Footer;
