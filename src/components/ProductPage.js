import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import products from '../data/data.json'

export function ProductPage() {
    const {id } = useParams();
    const cupcake = products.cupcakes[id];
    console.log(cupcake)
    const alert = () => {
        alert('It WORKED!!!🎉🎉🎉')
    }
    return(
        <Container className='text-center'>
            <h1 className="my-4 fs-1">{cupcake.product_name}</h1>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={require(`../imgs/${cupcake.product_img}`)} alt="img of cupcake"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require(`../imgs/${products.cupcakes[1].product_img}`)} alt="img of cupcake" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require(`../imgs/${products.cupcakes[2].product_img}`)} alt="img of cupcake" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require(`../imgs/${products.cupcakes[3].product_img}`)} alt="img of cupcake"/>
                </Carousel.Item>
            </Carousel>
            <div className='text-start'>
                <h4 className='mt-3'>$15 per dozen</h4>
                <p>{cupcake.product_desc}</p>
            </div>
            <div>
            {/* <button type="submit">
            <p><i class="icon-user icon-white"></i></p>
            </button> */}
            <i class="bi bi-2-square-fill"></i>
            <svg onClick={alert} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/></svg>
            {/* buttons go here */}
            {/* add to cart button */}
            </div>
       </Container>
    )
}