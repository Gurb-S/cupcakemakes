import { Container, Row } from "react-bootstrap";
import { ProductCard } from "./ProductCard";
import products from '../data/data.json'
import { BodyGradient } from "./BodyGradient";
import { InstallPWAModal } from "../pwa_prompt/InstallPWAModal";
import { useIsIOS } from "../pwa_prompt/useIsIOS";
import React from "react";
import { ProductCardDesktop } from "./ProductCardDesktop";

export function Body() {

    // TODO: in desktop mode, display img on left side of card and name and desc on right side of card
    const cupcakes = products.cupcakes
    //const cakes = products.cakes

    const { prompt }  = useIsIOS();

    const cupcakeCards = cupcakes.map((card) => {
        return <ProductCard
            id={card.id}
            img={card.product_img[0]}
            name={card.product_name}
            key={card.id}
        />
    })

    const cupcakeCardsDesktop = cupcakes.map((card) => {
        return <ProductCardDesktop
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
            <div className="m-0 pt-5 pb-2 d-flex web-mode pwa-mode justify-content-center bg-primary fixed-top">
                <h1>Cupcake Makes</h1>
            </div>
            <BodyGradient />
            { prompt && <InstallPWAModal /> }
            <div className="text-center">
                <h1 className="mt-3 fs-1">
                    CUPCAKES
                </h1>
                <p>*All cupcakes start at $15 a dozen</p>
                {/* className="d-sm-block d-md-none" */}
                <Container className="d-lg-none">
                    <hr className="mb-3"></hr>
                    <Row className="mb-2 m-auto" xs={2} md={4}>
                        {cupcakeCards}
                    </Row>
                </Container>
                <Container className="d-none d-lg-block">
                    <hr className="mb-3"></hr>
                    <Row className="mb-2 m-auto" xs={2} md={4}>
                        {cupcakeCardsDesktop}
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
                <p className="small-text fw-light">V 1.3</p>
            </div>
        </>
    )
}