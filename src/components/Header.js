import { Container, Nav, Navbar, Row, Col } from "react-bootstrap"

export function Header() {
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Row className="d-flex align-items-center" xs={3}>
                        <Col>
                            <Navbar.Brand href="/"><img src={"https://ik.imagekit.io/dod5kjssy/imgs/logo"} height={50} width={50} alt="logo" className="rounded-circle"></img></Navbar.Brand>
                        </Col>
                        <Col>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-basket2" viewBox="0 0 16 16">
                                <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"/>
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"/>
                                </svg>
                            </a>
                        </Col>
                        <Col>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/">Cupcake Gallery</Nav.Link>
                                    <Nav.Link href="/">Cake Gallery</Nav.Link>
                                    <Nav.Link href="/checkout">Cart</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}