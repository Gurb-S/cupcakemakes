import React, { useContext } from "react"
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap"
import SiteContext from "../context/Context"

export function Header() {

    // imports number of items in cart from context api
    const { numberOfItemsInCart } = useContext(SiteContext)
    // * use d-lg-none item when screen size large
    
    return(
        <Container className="p-0">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col>
                            <Navbar.Brand href="/"><img src={"https://ik.imagekit.io/dod5kjssy/imgs/logo"} height={50} width={50} alt="logo" className="rounded-circle"></img></Navbar.Brand>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex align-items-center ms-3">
                            <a href="/cart" className="me-3 text-dark position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16" type="button" alt="link to cart">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                <span className="visually-hidden">link to cart</span>
                                {(numberOfItemsInCart > 0 
                                ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {numberOfItemsInCart}
                                    <span className="visually-hidden">items in cart</span>
                                  </span>
                                : null)}
                            </a>
                            <button className='btn btn-body d-lg-none' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" aria-label="Open Menu">                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </button>
                            <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasTopLabel">Menu</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <Nav className="me-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/custom">Custom Cake</Nav.Link>
                                        {/* <Nav.Link href="/">Cupcake Gallery</Nav.Link>
                                        <Nav.Link href="/">Cake Gallery</Nav.Link> */}
                                    </Nav>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </Container>
    )
}