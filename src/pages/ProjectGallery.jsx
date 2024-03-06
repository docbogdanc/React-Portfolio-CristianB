import React from "react";
import Project from "./Projects";
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./Projects";
import projectData from "./projectData.json";
import OneProject from "./EachProject";

const ProjectGallery = ({ projects }) => {
  return (
   <div>
      <ul >
        {projects.map(project => (
          <li key={project.id}  style={{ border: '1px solid black', marginTop: '10px', padding: '10px', backgroundColor: '#f4f3ef' }}>
            <Link to={`${project.id}`}  style={{ color: 'black', fontWeight: 'bold' }}>{project.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="work" role="button" className="btn btn-link">
        Show Less
      </Link>
      <Routes>
        <Route path="1" element={<OneProject index={0}/>} />
        <Route path="2" element={<OneProject index={1}/>} />
        <Route path="3" element={<OneProject index={2}/>} />
        <Route path="4" element={<OneProject index={3}/>} />
        <Route path="5" element={<OneProject index={4}/>} />
        <Route path="6" element={<OneProject index={5}/>} />
      </Routes>     
    </div>
  );
};

export default ProjectGallery;
