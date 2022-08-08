import { Container, Row } from "react-bootstrap";
import { ProductCard } from "./ProductCard";
import products from '../data/data.json'
import { BodyGradient } from "./BodyGradient";


export function Body() {
    const cupcakes = products.cupcakes
    const cakes = products.cakes
    console.log(cupcakes)
    console.log(cakes)
    let key;
    const cupcakeCards = cupcakes.map((card) => {
        key++
        return <ProductCard 
            id={card.id}
            img={card.product_img}
            name={card.product_name}
            key={key}
        />
    })

    const cakeCards = cakes.map((card) => {
        return <ProductCard 
            img={card.product_img}
            name={card.product_name}
        />
    })
    return(
        <>
            <BodyGradient />
            <div className="text-center">
                <h1 className="mt-3 fs-1">
                    CUPCAKES
                </h1>
                <p className="text-muted">*All cupcakes start at $15</p>
                <Container>
                <hr className="mb-3"></hr>
                    <Row className="mb-2 m-auto" xs={2} md={4}>
                        {cupcakeCards}
                    </Row>
                </Container>
                <a  href="https://www.google.com" className="text-center fs-3">View More</a>
                <Container>
                {/* <hr className="mb-3"></hr> */}
                <h1 className="mt-3 fs-1">
                    CAKES
                </h1>
                <p className="text-muted">*All cakes must be custom ordered</p>
                <hr className="mb-3"></hr>
                    <Row className="mb-2 m-auto" xs={2} md={4}>
                        {cakeCards}
                    </Row>
                </Container>
            </div>
        </>
    )
}