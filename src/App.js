import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from "./components/Header";
import { BodyGradient } from "./components/BodyGradient";
import { Body } from "./components/Body";


function App() {
  return (
    <Router>
      <div className="container p-0">
        <Header />
        <BodyGradient />
        <Body /> 
      </div>
    </Router>
  );
}

export default App;
