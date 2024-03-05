import React from 'react';

function Project() {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>Link to deployed version: {project.deployedLink}</p>
      <p>Link to GitHub repository: {project.githubLink}</p>
      {/* Add more project details as needed */}
    </div>
  );
};

export default Project;