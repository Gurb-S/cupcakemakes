import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { SiteProvider } from "./context/Context";


// Components
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { ProductPage } from "./components/ProductPage";
import { Cart } from "./components/Cart";
import { CustomOrder } from "./components/CustomOrder";


function App() {
  return (
    <SiteProvider>
      <Router>
        <Container className="p-0">
          <Header />
          <Routes>
            <Route path="/" element={<Body />}/>
            <Route path="/products/:id" element={<ProductPage />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/custom" element={<CustomOrder />}/>
          </Routes>
        </Container>
      </Router>
    </SiteProvider>
  );
}

export default App;
