import React, { useContext } from "react"
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap"
import SiteContext from "../context/Context"
import logo from "../imgs/icons/bright_logo-removebg-more-light.png"

export function Header() {

    // imports number of items in cart from context api
    const { numberOfItemsInCart } = useContext(SiteContext)
    // * use d-lg-none item to only display the item if screen size is large or larger
    
    return(
        <Container className="p-0 footer">
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col>
                            <Navbar.Brand href="/"><img src={logo} height={50} width={50} alt="logo" className="rounded-circle"></img></Navbar.Brand>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex align-items-center ms-3">
                            <a href="/cart" className="me-3 text-danger position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                <span className="visually-hidden">link to cart</span>
                                {(numberOfItemsInCart > 0 
                                ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                    {numberOfItemsInCart}
                                    <span className="visually-hidden">items in cart</span>
                                  </span>
                                : null)}
                        </a>
                            <a href="/custom" className="ms-2 me-3 mt-1 text-danger position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" type="button" alt="link to custom order page">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                                <span className="visually-hidden">link to custom order page</span>
                            </a>
                            {/* <button className='btn btn-body d-lg-none' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" aria-label="Open Menu">                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                </svg>
                            </button>
                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasTopLabel">Menu</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <Nav className="me-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/custom">Custom Cupcake</Nav.Link>
                                        <Nav.Link href="/">Cupcake Gallery</Nav.Link>
                                        <Nav.Link href="/">Cake Gallery</Nav.Link>
                                    </Nav>
                                </div>
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </Container>
    )
}
