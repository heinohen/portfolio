import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';


const App = () => {

  useEffect(() => {
    document.title = "Portfolio";
  }, []);


  return (
    <Router basename="/portfolio">
      <div className="App">
        <Navbar />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        
        
      </div>
      <Footer />
    </Router>
  );
};;

export default App;
      