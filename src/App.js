import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from "react-bootstrap";

// Components
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { ProductPage } from "./components/ProductPage";


function App() {
  return (
    <Router>
      <Container className="p-0">
        <Header />
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path="/products/:id" element={<ProductPage />}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
