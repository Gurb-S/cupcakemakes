import React, { useEffect, useState } from 'react'
import { Carousel, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import products from '../data/data.json'

export function ProductPage() {
    const {id } = useParams();
    const cupcake = products.cupcakes[id];

    const [ count, setCount ] = useState(1);
    // console.log(cupcake)
    // const counter = (type) => {
    //     if(type === 'plus'){
    //         console.log('this is addition')
    //         setCount(count + 1)
    //         console.log(count)
    //     }
    // }

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
                <Form>
                    <Container className='mx-auto' style={{ width: '200px' }}>
                        <Row xs='auto'>
                            <Col className='ms-3 minus' onClick={() => count >0 ? setCount(count - 1)  : null}> 
                                <svg style={{ cursor: 'pointer' }} id="minus" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-patch-minus-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                                </svg>
                            </Col>
                            <Col>
                                <p className='mt-1'>{count}</p>
                            </Col>
                            <Col onClick={() => setCount(count + 1)}>
                                <svg style={{ cursor: 'pointer' }}  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-patch-plus-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </Col>
                        </Row>
                    </Container>
                    <Row>
                        <Col xs={12}>
                            <Form.Text className='text-muted'>
                                Cupcakes are sold by the dozen
                            </Form.Text>
                        </Col>
                        <Col className='w-25 p-3'>
                            <Button variant="primary" type="submit">
                                Add to Cart
                            </Button>
                        </Col>
                    </Row>
                </Form>
            {/* buttons go here */}
            {/* add to cart button */}
       </Container>
    )
}