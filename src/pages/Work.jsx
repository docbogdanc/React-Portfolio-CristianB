import React from "react";
import { Routes, Route } from 'react-router-dom';
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ProjectGallery from "./ProjectGallery";
import projectData from "./projectData.json";
import Projects from "./Projects"


function Work() {
  return (
    <div>
      <Hero>
        <img src="https://github.com/docbogdanc/Bootstrap-Portfolio-CristianB/blob/main/images/poza.jpg?raw=true" alt="Profile Image" style={{ position: 'absolute', top: 0, left: 0, height: '100px', margin : '20px' }} />
        <h1>Cristian Bogdan</h1>
        <h3>Some projects of mine :</h3>

      </Hero>
      <Container style={{ marginTop: 30 }}>

        <Row>
          <Col size="md-12">
            <div>
              <div>
                <Routes>
                  <Route path="*" element={<ProjectGallery projects={projectData} />} />
                  <Route to="proj" element={<Projects projects={projectData} />} />

                </Routes>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Work;
