import React, { useContext } from "react"
import { useLocation } from "react-router-dom"
import { Container, Nav } from "react-bootstrap"
import black_logo from "../imgs/icons/logo_black.png"
import white_logo from "../imgs/icons/bright_logo-removebg-more-light.png"
import SiteContext from "../context/Context"

export function Footer(){

    const location = useLocation();
    const currentPage = location.pathname;
    console.log(currentPage);  

    // imports number of items in cart from context apit
    const { numberOfItemsInCart } = useContext(SiteContext)
    // * use d-lg-none item to only display the item if screen size is large or larger

    return(
        <Container className="p-0 pwa-mode">
          <Nav variant="pills" className="justify-content-evenly align-items-center fixed-bottom bg-primary">
            <Nav.Item>
              <Nav.Link href="/"><img src={(currentPage === "/" ? white_logo : black_logo)} height={45} width={45}   alt="logo" className="rounded-circle"></img> 
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/cart" className={currentPage === "/cart" ? "text-light" : "text-danger"}>                                
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <span className="visually-hidden">link to cart</span>
              {(numberOfItemsInCart > 0 
              ? <span className="position-absolute top-75 start-75 translate-middle badge rounded-pill bg-warning">
                  {numberOfItemsInCart}
                  <span className="visually-hidden">items in cart</span>
                </span>
              : null)}
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/custom" className={currentPage === "/custom" ? "text-light" : "text-danger"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16" alt="link to custom order page">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
              <span className="visually-hidden">link to custom order page</span>
            </Nav.Link>
            </Nav.Item>
          </Nav>
            {/* <Navbar bg="primary" expand="lg" fixed="bottom">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col>
                            <Navbar.Brand href="/"><img src={logo} height={50} width={50} alt="logo" className="rounded-circle"></img></Navbar.Brand>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex align-items-center ms-3">
                            <Link to={`/cart`} className="me-3 text-danger position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                <span className="visually-hidden">link to cart</span>
                                {(numberOfItemsInCart > 0 
                                ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                    {numberOfItemsInCart}
                                    <span className="visually-hidden">items in cart</span>
                                  </span>
                                : null)}
                            </Link>
                            <Link to={`/custom`} className="ms-2 me-3 mt-1 text-danger position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16" alt="link to custom order page">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                                <span className="visually-hidden">link to custom order page</span>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar> */}
        </Container>
    )
}