import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import NavbarWork from '../components/NavbarWork';
import ProjectGallery from "./ProjectGallery";
// import Project from '../components/Project'
import projectData from "./projectData.json";

function Work() {
  return (
    <div>
      <Hero>
        <img src="src\assets\poza.jpg" alt="Profile Image" style={{ position: 'absolute', top: 0, left: 0, height: '100px', margin : '20px' }} />
        <h1>Cristian Bogdan</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Some projects of mine :</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div>
              <div>
                
                <ProjectGallery style={{ border: '1px solid black'}} projects={projectData} />
              </div>
            </div>
            {/* <NavbarWork /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Work;
