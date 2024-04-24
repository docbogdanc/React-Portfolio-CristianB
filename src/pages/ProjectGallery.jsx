import React from "react";
import Project from "./Projects";
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./Projects";
import projectData from "./projectData.json";
import OneProject from "./EachProject";
import 'bootstrap/dist/css/bootstrap.css';
let ranking = 0


const ProjectGallery = ({ projects }) => {
  return (
   <div className="accordion accordion-flush" id="accordionFlushExample">
    {projects.map((project, index) => (
      <div key={project.id} className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${project.rank}`} aria-expanded="false" aria-controls={`flush-collapse${project.rank}`}>
          {project.title}
          </button>
        </h2>
        <div id={`flush-collapse${project.rank}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <OneProject index={index}/>
            Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
        </div>
      </div>
    ))}
      <ul >
        {projects.map(project => (
          <li  key={project.id}  style={{ border: '1px solid black', marginTop: '10px', padding: '10px', backgroundColor: '#f4f3ef' }}>
            <Link to={`${project.id}`}  style={{ color: 'black', fontWeight: 'bold' }}>{project.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="work" role="button" className="btn btn-link">
        Show Less
      </Link>
      <Routes>
        <Route path="9" element={<OneProject index={0}/>} />
        <Route path="8" element={<OneProject index={1}/>} />
        <Route path="7" element={<OneProject index={2}/>} />
        <Route path="6" element={<OneProject index={3}/>} />
        <Route path="5" element={<OneProject index={4}/>} />
        <Route path="4" element={<OneProject index={5}/>} />
        <Route path="3" element={<OneProject index={6}/>} />
        <Route path="2" element={<OneProject index={7}/>} />
        <Route path="1" element={<OneProject index={8}/>} />

      </Routes>     
    </div>
  );
};

export default ProjectGallery;
