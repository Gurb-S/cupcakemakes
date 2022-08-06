import { Col, Container, Row } from "react-bootstrap";
import { ProductCardDisplay } from "./ProductCardDisplay";

export function Body() {
    return(
        <div className="text-center">
            <h1 className="mt-3 fs-1">
                CUPCAKES
            </h1>
            <p className="text-muted">*All cupcakes start at $15</p>
            <Container>
            <hr className="mb-3"></hr>
                <Row className="mb-5">
                    <Col className="justify-content-center">
                        <ProductCardDisplay />
                    </Col>                    
                    <Col>
                        <ProductCardDisplay />
                    </Col>
                    <Col>
                        <ProductCardDisplay />
                    </Col>
                    <Col>
                        <ProductCardDisplay />
                    </Col>
                </Row>
            </Container>
            {/* Move this to the end */}
            {/* <h4 className="text-center text-decoration-underline">View More</h4> */}
        </div>
    )
}