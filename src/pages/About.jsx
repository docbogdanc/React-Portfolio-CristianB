import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function About() {
  return (
    <div>
      <Hero backgroundImage="./poza.jpg">
        <h1>Cristian Bogdan</h1>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
