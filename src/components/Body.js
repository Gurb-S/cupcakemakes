import { Container, Row } from "react-bootstrap";
import { ProductCard } from "./ProductCard";
import cupcake from '../data/cupcake.json'
import cake from '../data/cake.json'


export function Body() {
    const cupcake_product = cupcake.products
    const cake_product = cake.products
    console.log(cake_product)
    let key;
    // const cupcakeCards = cupcake_product.map((card) => {
    //     key++
    //     return <ProductCard 
    //         img={card.product_img}
    //         name={card.product_name}
    //         key={key}
    //     />
    // })

    const cakeCards = cake_product.map((card) => {
        key++
        return <ProductCard 
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
            {/* <Container>
            <hr className="mb-3"></hr>
                <Row className="mb-2 m-auto" xs={2} md={4}>
                    {cupcakeCards}
                </Row>
            </Container> */}
            <a  href="https://www.google.com" className="text-center fs-3">View More</a>
            <Container>
            <hr className="mb-3"></hr>
                <Row className="mb-2 m-auto" xs={2} md={4}>
                    {cakeCards}
                </Row>
            </Container>
        </div>
    )
}