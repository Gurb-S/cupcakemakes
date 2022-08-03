import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap'

import { Header } from "./components/Header";


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
      </div>
    </Router>
  );
}

export default App;
