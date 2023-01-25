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
          alt="vacation image"
        />
      </div>
      <h1>Hi, I'm Gladys</h1>
      <p>a web-developer in the making</p>
      <p>
        I'm currently attending a full time web-development course at DCI,
        learning how to code and solve challenges
      </p>
      <a
        href={Pdf}
        target="_blank"
        className={classes.intro__btn}
        role="button"
      >
        <span>View my CV</span>
      </a>
    </div>
  );
};

export default Introduction;
