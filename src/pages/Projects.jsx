import React from 'react';

const Project = ({ project }) => {
  return (
    <div style={{ border: '1px solid black' , marginTop : '10px', padding : '10px', backgroundColor : '#f4f3ef'}}>
      <h2>{project.title}</h2>
      <p>Link to deployed version: <a href={project.deployedLink}>{project.title}</a></p>
      <p>Link to GitHub repository: <a href={project.githubLink}>{project.githubLink}</a></p>
      {/* Add more project details as needed */}
    </div>
  );
};

export default Project;