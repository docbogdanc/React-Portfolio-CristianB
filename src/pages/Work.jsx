import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
// import NavbarWork from '../components/NavbarWork';
import ProjectGallery from './ProjectGallery';
// import Project from '../components/Project'
import projectData from './projectData.json';

function Work() {
  return (
    <div>
      <Hero backgroundImage="./poza.jpg">
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
            <p>
              projects
              <div>
                <div>
                  <h1>Project Gallery</h1>
                  <ProjectGallery projects={projectData} />
                </div>
              </div>
              {/* <NavbarWork /> */}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Work;