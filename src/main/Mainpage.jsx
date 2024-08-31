import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from '../rest/Home';
import About from '../rest/About';
import Header from '../rest/Header';
import Footer from '../rest/Footer';
import Register from '../rest/Register';
import Login from '../rest/Login';
import Stdreg from '../rest/Stdreg';
import Instreg from '../rest/Instreg';
import Stdinfo from '../rest/Stdinfo';
import Instinfo from '../rest/Instinfo';
const Mainpage = () => {
  return (
    <Router>
      <div>
        <Header />
        <Home/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Stdreg" element={<Stdreg />} />
          <Route path="/Insterg" element={<Instreg />} />
          <Route path="/Stdinfo" element={<Stdinfo />} />
          <Route path="/Instinfo" element={<Instinfo />} />
          
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};

export default Mainpage;
