import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function About() {
  return (
    <div>
      <Hero>
        <img src="https://github.com/docbogdanc/Bootstrap-Portfolio-CristianB/blob/main/images/poza.jpg?raw=true" alt="Profile Image" style={{ position: 'absolute', top: 0, left: 0,  height: '250px', margin : '20px' }} />
        <h1>Cristian Bogdan</h1>
        <h5>"The secret of making progress is to get started"</h5>
        <h6> - Mark Twain -</h6>

      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My page!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              This is my window to the world
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
