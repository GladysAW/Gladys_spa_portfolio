import React from "react";
import classes from "./ProjectCards.module.scss";
import smarties from "../assets/smarties.jpg";
import Hourglass2 from "../assets/Hourglass_marcel_unsplash.jpg";
import Hourglass3 from "../assets/Hourglass_todov_unsplash.jpg";
import Hourglass4 from "../assets/Hourglass_Wegmann_unsplash.jpg";

const ProjectCards = () => {
  const projectsList = [
    {
      key: 1,
      source: smarties,
      title: "Smarties Calculator",
      codingLanguage: "React.js | Sass | npm",
      text: "A simple but not so simple calculator. It's designed for a child to train their brain on the four math operations: addition, subtraction, division and multiplication.",
      demoLink: "https://gladysaw.github.io/smarties_calculator/",
      codeLink: "https://github.com/GladysAW/smarties_calculator",
    },
    {
      key: 2,
      source: Hourglass2,
      title: "Project Title",
      codingLanguage: "Coding language",
      text: "About this project..............",
      demoLink: "pending",
      codeLink: "",
    },
    {
      key: 3,
      source: Hourglass3,
      title: "Project Title",
      codingLanguage: "Coding language",
      text: "About this project..............",
      demoLink: "pending",
      codeLink: "",
    },
    {
      key: 4,
      source: Hourglass4,
      title: "Project Title",
      codingLanguage: "Coding language",
      text: "About this project..............",
      demoLink: "pending",
      codeLink: "",
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
              <a target="_blank" href={project.demoLink}>
                demo
              </a>
              <a target="_blank" href={project.codeLink}>
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
