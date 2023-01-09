import React from "react";
import classes from "./ProjectCards.module.scss";
import Hourglass1 from "../assets/Hourglass_Eliason_unsplash.jpg";
import Hourglass2 from "../assets/Hourglass_marcel_unsplash.jpg";
import Hourglass3 from "../assets/Hourglass_todov_unsplash.jpg";
import Hourglass4 from "../assets/Hourglass_Wegmann_unsplash.jpg";

const ProjectCards = () => {
  const projectsList = [
    {
      key: 1,
      source: Hourglass1,
      title: "Project Title",
      codingLanguage: "Coding language",
      text: "About this project..............",
    },
    {
      key: 2,
      source: Hourglass2,
      title: "Project Title",
      codingLanguage: "Coding language",
      text: "About this project..............",
    },
    {
      key: 3,
      source: Hourglass3,
      title: "Project Title",
      codingLanguage: "Coding language",
      text: "About this project..............",
    },
    {
      key: 4,
      source: Hourglass4,
      title: "Project Title",
      codingLanguage: "Coding language",
      text: "About this project..............",
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
            <h3>{project.title}</h3>
            <h4>{project.codingLanguage}</h4>
            <p>{project.text}</p>
          </div>
        </div>
      </div>
    );
  });

  return <>{projectCard}</>;
};

export default ProjectCards;
