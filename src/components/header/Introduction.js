import React from "react";
import classes from "./Introduction.module.scss";
import rndProfilePic from "../assets/Profile_rnd_img_Gladys.jpg";
import Pdf from "../assets/Gladys_CV_gh.pdf";

const Introduction = () => {
  return (
    <div className={classes.introduction}>
      <div>
        <img
          className={classes.profile__img}
          src={rndProfilePic}
          alt="vacation"
        />
      </div>
      <h1>Hi, I'm Gladys</h1>
      <p className={classes.title}>a web-developer</p>
      <p>
        I'm ready to take on an entry level role as a frontend web developer. I
        really enjoy working with UI and building Responsive Web Designs.
      </p>
      <a
        href={Pdf}
        target="_blank"
        rel="noreferrer"
        className={classes.intro__btn}
        role="button"
      >
        <span>View my CV</span>
      </a>
    </div>
  );
};

export default Introduction;
