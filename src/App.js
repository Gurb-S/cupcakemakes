import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from "./components/Header";
import { BodyGradient } from "./components/BodyGradient";


function App() {
  return (
    <Router>
      <div className="container p-0">
        <Header />
        <BodyGradient />
      </div>
    </Router>
  );
}

export default App;
