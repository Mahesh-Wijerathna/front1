

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home'; // Import the 'Home' component
import Login from './components/Login';
import Register from './components/Register';
import Medical from './components/Medical';
import Search from './components/Search';
import About from './components/About';
import Information from './components/Information';
import Example from './components/Example';
import Mtemplate from './components/Mtemplate';
import Appointment from './components/Appointment';



function App() {
  const isTesting = 1;

  
  
  if(isTesting)return (

    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/information" element={<Information />} />
          <Route path="/example" element={<Example />} />
          <Route path="/mtemplate" element={<Mtemplate />} />
          <Route path="/appointment" element={<Appointment />} />
          
        </Routes>
      </Router>
    </div>

  );
  else return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>
    </div>
  );












}

export default App;
