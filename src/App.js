import React from 'react';
import {Route, Switch} from "react-router-dom";
import Navbar from '../src/Navbar/Navbar'
import './App.css';

function App() {
  return (
    <Route>

    

    <div className="App">
      <header id="home">
        <Navbar />
      </header>
    </div>
    </Route>
  );
}

export default App;
