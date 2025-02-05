import React from 'react';
import Home from './components/Home';
import About from './components/About'; 
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import References from './components/References';

function App() {


    document.title = "portfolio";
  return (
    <div className="container">

    
      <nav className="sidebar">
        <div className="sidebar-text">
            <p>PORTFOLIO</p>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#references">References</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="content">
        <Home />
        <About />
        <Education />
        <Projects />
        <References />
        <Contact />


      </main>
      </div>
  );
}

export default App;
