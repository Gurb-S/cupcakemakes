import { Container, Nav, Navbar } from "react-bootstrap"

export function Header() {
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img src={require("../imgs/logo.jpeg")} height={50} width={50} alt="logo" className="rounded-circle"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Cupcake Gallery</Nav.Link>
                            <Nav.Link href="/">Cake Gallery</Nav.Link>
                            <Nav.Link href="/">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}