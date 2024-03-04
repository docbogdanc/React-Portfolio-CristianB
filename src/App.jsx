import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
// import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/work" element={<Work/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/resume" element={<Resume/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
);
}

export default App
