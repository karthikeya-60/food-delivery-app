import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './component/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App(){
  return (
      <Router>
        <Router path="/" element={<Home />} />
        <Router path="/Login" element={<Login />} />
        <Router path="/Register" element={<Register />} />
        </Router>
  
  )
}

export default App