import { Container, Row } from "react-bootstrap";
import { ProductCardDisplay } from "./ProductCardDisplay";
import products from '../data/data.json'


export function Body() {
    const product = products.products
    let key;
    const cards = product.map((card) => {
        key++
        return <ProductCardDisplay 
            img={card.product_img}
            name={card.product_name}
            key={key}
        />
    })
    return(
        <div className="text-center">
            <h1 className="mt-3 fs-1">
                CUPCAKES
            </h1>
            <p className="text-muted">*All cupcakes start at $15</p>
            <Container>
            <hr className="mb-3"></hr>
                <Row className="mb-5 m-auto" xs={2} md={4}>
                    {cards}
                </Row>
            </Container>
            {/* Move this to the end */}
            {/* <h4 className="text-center text-decoration-underline">View More</h4> */}
        </div>
    )
}