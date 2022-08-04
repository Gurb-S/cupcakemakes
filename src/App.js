import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap'

import { Header } from "./components/Header";
import { Body } from "./components/Body";


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Body />
      </div>
    </Router>
  );
}

export default App;
