import React from "react";
import classes from "./ProjectCards.module.scss";
import smarties from "../assets/smarties_screenshot.png";
import portfolio_screenshot from "../assets/portfolio_screenshot.png";
import bp_tracker_screenshot from "../assets/bp_tracker_screenshot.png";
// import Hourglass4 from "../assets/Hourglass_Wegmann_unsplash.jpg";
import entscape_screenshot from "../assets/entscape_screenshot.png";

const ProjectCards = () => {
  const projectsList = [
    {
      key: 1,
      source: entscape_screenshot,
      title: "EntScape",
      codingLanguage:
        "React.js | Vite | ESLint | Sass | Express | Node.js | MongoDB",
      text: "Which is better..the book or the movie? from this age-old debate, the idea for a group final project of my development course was created. Entscape is a collaborative effort of 4 developers (myself included). It is a portal designed for booksworms and cinephiles, where they can discover both worlds of entertainment",
      demoLink: "https://entscape-spa.onrender.com",
      codeLink: "https://github.com/GladysAW/EntScape-Final-Project",
    },
    {
      key: 2,
      source: bp_tracker_screenshot,
      title: "Blood Pressure Tracker",
      codingLanguage: "React.js | Sass | Express | Node.js | MongoDB",
      text: "A blood pressure tracker which I created during my online coding course. Built a small database on MongoDB and hosted the web app on Render. To take a look at my backend code, please visit my github page. More features are planned to be implemented",
      demoLink: "https://blood-pressure-tracker-mern.onrender.com/",
      codeLink: "https://github.com/GladysAW/blood_pressure_tracker_frontend",
    },
    {
      key: 3,
      source: portfolio_screenshot,
      title: "Portfolio Web Page",
      codingLanguage: "React.js | Sass",
      text: "It's a single page app portfolio which contains an about me section, a projects section that I update as I learn more and create new websites",
      demoLink: "https://gladysaw.github.io/Gladys_spa_portfolio/",
      codeLink: "https://github.com/GladysAW/Gladys_spa_portfolio",
    },
    {
      key: 4,
      source: smarties,
      title: "Smarties Calculator",
      codingLanguage: "React.js | Sass",
      text: "A simple but not so simple calculator. It's designed for a child to train their brain on the four math operations: addition, subtraction, division and multiplication.",
      demoLink: "https://gladysaw.github.io/smarties_calculator/",
      codeLink: "https://github.com/GladysAW/smarties_calculator",
    },
  ];

  const projectCard = projectsList.map((project) => {
    return (
      <div key={project.key} className={classes.project_card}>
        <img
          src={project.source}
          alt=""
          className={classes.project_card__img}
        />
        <div className={classes.project_card__overlay}>
          <div className={classes.project_card__text__container}>
            <h1>{project.title}</h1>
            <h3>{project.codingLanguage}</h3>
            <p>{project.text}</p>
            <div className={classes.linksWrapper}>
              <a target="_blank" rel="noreferrer" href={project.demoLink}>
                demo
              </a>
              <a target="_blank" rel="noreferrer" href={project.codeLink}>
                code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{projectCard}</>;
};

export default ProjectCards;
