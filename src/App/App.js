import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <header id="home">
          <Navbar/>
          <Home />
        </header>
      </Router>
    </React.Fragment>
  );
}

export default App;
