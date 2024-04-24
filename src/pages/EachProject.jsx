import React from "react";
import Project from "./Projects";
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./Projects";
import projectData from "./projectData.json";


function OneProject (props) {
    const selectedProject = projectData[props.index]
  return (
    <div className='row' style={{ border: '1px solid black', marginTop: '10px', padding: '10px', backgroundColor: '#f4f3ef' }}>
      <div className='col-12 col-sm-12 col-lg-4'>
        <img src={selectedProject.img} alt="Project Screenshot" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
  
      <div className='col-12 col-sm-12 col-lg-4'>
        <p>Deployed version: <a href={selectedProject.deployedLink}>{selectedProject.title}</a></p>
        <p>GitHub repository: <a href={selectedProject.githubLink}>{selectedProject.githubLink}</a></p>
        {/* Add more project details as needed */}
      </div>

      <div className='col-12 col-sm-12 col-lg-4'>
        <p>{selectedProject.description1}</p>
        <p>{selectedProject.description2}</p>
      </div>
    </div>
  );
}

export default OneProject;