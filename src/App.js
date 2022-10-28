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
import { Footer } from "./components/Footer";
import { Checkout } from "./components/Checkout";
import { FormSuccess } from "./components/FormSuccess";


// TODO: make different footer for PWA 
// TODO: make different header for PWA
// TODO: header hidden in background in PWA
// TODO: make PWA functionality

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
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/thanks" element={<FormSuccess /> }/>
          </Routes>
          <Footer />
        </Container>
      </Router>
    </SiteProvider>
  );
}

export default App;
