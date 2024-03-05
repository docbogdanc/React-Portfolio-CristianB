import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import { Link, NavLink } from 'react-router-dom';
import Card from '../components/Card';

function Contact() {
  return (
    <div>
      <Hero>
        <img src="src\assets\poza.jpg" alt="Profile Image" style={{ position: 'absolute', top: 0, left: 0, height: '100px', margin : '20px' }} />
        <h1>Cristian Bogdan</h1>
        <h5>Let's start something great. First step is my contact</h5>

      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <div className="row">
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Phone</h5>
                  <p className="card-text">0712341234</p>
                 </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Email</h5>
                  <p className="card-text"><a href="mailto:docbogdanc@yahoo.com">docbogdanc@yahoo.com</a></p>
                </div>
              </div>
            </div>
          
          <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">GitHub</h5>
                  <p className="card-text"><a href="https://github.com/docbogdanc/">docbogdanc</a></p>
                </div>
              </div>
            </div>
          
          <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">LinkedIn</h5>
                  <p className="card-text"><a href="https://www.linkedin.com/in/cristian-b-2799862b8/">CristianB</a></p>
                </div>
              </div>
            </div>
            
          </div>
        </Row>

      </Container>
    </div>
  );
}

export default Contact;