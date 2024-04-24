import React from "react";
import Project from "./Projects";
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./Projects";
import projectData from "./projectData.json";


function OneProject (props) {
    const selectedProject = projectData[props.index]
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
}

export default OneProject;