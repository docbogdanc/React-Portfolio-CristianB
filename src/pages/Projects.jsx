import React from 'react';
import { useParams } from 'react-router-dom';

const Projects = ({ projects }) => {
  const { projectId } = useParams();
  const selectedProject = projects.find(project => project.id === parseInt(projectId));

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className='row' style={{ border: '1px solid black', marginTop: '10px', padding: '10px', backgroundColor: '#f4f3ef' }}>
      <div className='col-6 col-sm-4'>
        <img src={selectedProject.img} alt="Project Screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      
      <div className='col-6 col-sm-4'>
        <h2>{selectedProject.title}</h2>
        <p>Link to deployed version: <a href={selectedProject.deployedLink}>{selectedProject.title}</a></p>
        <p>Link to GitHub repository: <a href={selectedProject.githubLink}>{selectedProject.githubLink}</a></p>
        {/* Add more project details as needed */}
      </div>
    </div>
  );
};

export default Projects;