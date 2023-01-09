import React from "react";
import classes from "./About.module.scss";
import profileImgGladys from "../assets/Profile_img_Gladys.jpg";

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <div className={classes.container}>
        <div className={classes.about__flex}>
          <div className={classes.about__left}>
            <h2>About me</h2>
            <p>
              In highschool, one of my math teachers, used to write equations on
              the board, and reward the fastest student who solves them with
              candy. By the end of the day, I was the geek with the most
              bonbons. They didn't taste so good..but the rush of winning always
              tasted sweet 😏
            </p>
            <p>
              Fast-forward a few years, I had my first job as a bank agent
              working with numbers and money! Passion and self-drive are
              qualities I carried with me through my career. It always gave me a
              sense of pride to leave a positive impact at every stage during my
              9+ years of working in the banking and financial tech sector.
            </p>
            <p>
              However my interest in technology and my passion to become a
              developer led me to make a bold switch in my career and pursue
              programming. So I joined a full-stack web development course and
              I'm currently spending many hours every day learning to code.
              Currently I'm really enjoying solving JavaScript challenges and
              using React.js as a library, which to be honest, I'm finding much
              more fun than just styling with css!
            </p>
            <p>
              Long story short: Banking → Fin-Tech Operations → Web Development!
            </p>
          </div>
          <div className={classes.about__right}>
            <img
              className={classes.about__img}
              src={profileImgGladys}
              alt="application-img"
            />
            <div className={classes.square}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
