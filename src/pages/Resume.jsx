import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function Resume() {
  return (
    <div>
      <Hero >
        <img src="src\assets\poza.jpg" alt="Profile Image" style={{ position: 'absolute', top: 0, left: 0, height: '100px', margin : '20px' }} />
        <h1>Cristian Bogdan</h1>

      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <p>
              <a href="https://docs.google.com/document/d/1mPC0MhqCIxqOWhFYE08GG1MoQ3n06ZUtWtfWRm85LCY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-dark"  >
            Resume here
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;