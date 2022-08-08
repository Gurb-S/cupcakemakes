import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import products from '../data/data.json'

export function ProductPage() {
    const {id } = useParams();
    const cupcake = products.cupcakes[id];
    console.log(cupcake)
    return(
        <Container className='text-center'>
            <h1 className="my-4 fs-1">{cupcake.product_name}</h1>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={require(`../imgs/${cupcake.product_img}`)} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require(`../imgs/${products.cupcakes[1].product_img}`)} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require(`../imgs/${products.cupcakes[2].product_img}`)} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require(`../imgs/${products.cupcakes[3].product_img}`)} />
                </Carousel.Item>
            </Carousel>
            <div className='text-start'>
                <h4 className='mt-3'>$15 per dozen</h4>
                <p>{cupcake.product_desc}</p>
            </div>
            <div>
            {/* buttons go here */}
            {/* add to cart button */}
            </div>
       </Container>
    )
}