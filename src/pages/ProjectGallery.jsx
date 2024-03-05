import React from 'react';
import Project from './Project';

const ProjectGallery = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGallery;