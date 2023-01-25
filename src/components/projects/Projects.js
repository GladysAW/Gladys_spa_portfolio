import React from "react";
import classes from "./Projects.module.scss";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <section id="Projects" className={classes.projects}>
      <div className={classes.container}>
        <h2>Projects</h2>
        <div className={classes.project_card__container}>
          <ProjectCards />
        </div>
      </div>
    </section>
  );
};

export default Projects;
