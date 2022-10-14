import { Container, Row } from "react-bootstrap";
import { ProductCard } from "./ProductCard";
import products from '../data/data.json'
import { BodyGradient } from "./BodyGradient";


export function Body() {
    const cupcakes = products.cupcakes
    //const cakes = products.cakes

    const cupcakeCards = cupcakes.map((card) => {
        return <ProductCard 
            id={card.id}
            img={card.product_img[0]}
            name={card.product_name}
            key={card.id}
        />
    })

    // * creates the card for cakes
    // const cakeCards = cakes.map((card) => {
    //     return <ProductCard 
    //         img={card.product_img}
    //         name={card.product_name}
    //     />
    // })
    // * end creating cupcake
    return(
        <>
            <BodyGradient />
            <div className="text-center">
                <h1 className="mt-3 fs-1">
                    CUPCAKES
                </h1>
                <p>*All cupcakes start at $15 a dozen</p>
                <Container>
                <hr className="mb-3"></hr>
                    <Row className="mb-2 m-auto" xs={2} md={4}>
                        {cupcakeCards}
                    </Row>
                </Container>
               {/*// ! Do not delete
                // * code for displaying cake cards} */}
                {/* <a  href="https://www.google.com" className="text-center fs-3">View More</a>
                <Container>
                <h1 className="mt-3 fs-1">
                    CAKES
                </h1>
                <p className="text-muted">*All cakes must be custom ordered</p>
                <hr className="mb-3"></hr>
                    <Row className="mb-2 m-auto" xs={2} md={4}>
                        {cakeCards}
                    </Row>
                </Container> */}
            </div>
        </>
    )
}