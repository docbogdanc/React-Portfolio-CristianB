import React from "react";
import Project from "./Projects";

const ProjectGallery = ({ projects }) => {
  return (
    <div >
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGallery;
