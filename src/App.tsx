import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

// Create the different page components
const Services = () => <div><h2>Services Page</h2><p>Discover our services.</p></div>;
const Contact = () => <div><h2>Contact Page</h2><p>Get in touch with us.</p></div>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        
      </div>
      <Footer />
    </Router>
  );
};;

export default App;
      