import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from "react-bootstrap";

import { Header } from "./components/Header";
import { BodyGradient } from "./components/BodyGradient";
import { Body } from "./components/Body";


function App() {
  return (
    <Router>
      <Container className="p-0">
        <Header />
        <BodyGradient />
        <Body /> 
      </Container>
    </Router>
  );
}

export default App;
