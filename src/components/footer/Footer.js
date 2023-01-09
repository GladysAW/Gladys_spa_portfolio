import React from "react";
import classes from "./Footer.module.scss";
import linkedInIcon from "../assets/icons/icons8-linkedin.svg";
import githubIcon from "../assets/icons/icons8-github.svg";
import xingIcon from "../assets/icons/icons8-xing.svg";

const Footer = () => {
  return (
    <footer>
      <nav className={classes.social_media}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/gladys-aldoumani-34b76286/"
        >
          <img src={linkedInIcon} alt="linkedin-icon" />
        </a>
        <a target="_blank" href="https://github.com/GladysAW">
          <img src={githubIcon} alt="github-icon" />
        </a>
        <a
          target="_blank"
          href="https://www.xing.com/profile/Gladys_Aldoumani/cv"
        >
          <img src={xingIcon} alt="xing-icon" />
        </a>

        <p className={classes.copyright}>
          © My copyright. All rights reserved for me &#128515;
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
