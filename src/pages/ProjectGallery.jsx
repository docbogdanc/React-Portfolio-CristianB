import React from "react";
import Project from "./Projects";
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./Projects";
import projectData from "./projectData.json";
import OneProject from "./EachProject";
import 'bootstrap/dist/css/bootstrap.css';



const ProjectGallery = ({ projects }) => {
  return (
   <div className="accordion accordion-flush" id="accordionFlushExample">
    {projects.map((project, index) => (
      <div key={project.id} className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={{ color: 'black',fontWeight: '700', border: '1px solid black', marginTop: '10px', padding: '10px', backgroundColor: '#f4f3ef' }} data-bs-toggle="collapse" data-bs-target={`#flush-collapse${project.rank}`} aria-expanded="false" aria-controls={`flush-collapse${project.rank}`}>
          {project.title}
          </button>
        </h2>
        <div id={`flush-collapse${project.rank}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <OneProject index={index}/>
          </div>
        </div>
      </div>
    ))}
    </div>
  );
};

export default ProjectGallery;
