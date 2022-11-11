import React, { useContext, useState } from 'react'
import { Carousel, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import products from '../data/data.json'
import SiteContext from '../context/Context';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BackBtn } from './BackBtn';


export function ProductPage() {

    // stores the value of the id param in the url
    const { id } = useParams();
    
    // gets the cupcake who's id matches the number in the url
    const cupcake = products.cupcakes[id];

    //import from context api
    const { setCookie } = useContext(SiteContext);

    // name of cupcake selected
    let cupcakeName = cupcake.product_name;

    // price of the cupcake selected
    let cupcakePrice = cupcake.product_price;

    // 1st imgs of cupcake selected
    let cupcakeImg1 = cupcake.product_img[0];

    // 2nd imgs of cupcake selected
    let cupcakeImg2 = cupcake.product_img[1];

    // keeps track of counter on page
    const [ count, setCount ] = useState(1);
    
    // when submitted creates a cookie with the name of the cupcake and number of cupcakes
    const handleSubmit = (e) =>{
        e.preventDefault();
        setCookie(cupcakeName, count);
        toast.success(`${cupcakeName} added to cart!`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1800,
          })
    }

    return(
        <div className='text-center'>
            <BackBtn page={cupcake.product_name} />
            <h1 className="my-4 fs-1 no-header d-lg-none">{cupcake.product_name}</h1>
            <Container className="d-lg-none">
                <Carousel variant="success" fade>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100 rounded d-md-none d-lg-block" src={`${cupcakeImg1}`} width={300} height={300} alt="img of cupcake" />
                        <img className="d-block w-100 rounded d-none d-md-block d-lg-none" src={`${cupcakeImg1}`} width={400} height={400} alt="img of cupcake" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100 rounded d-md-none d-lg-block" src={`${cupcakeImg2}`} width={300} height={300} alt="img of cupcake" />
                        <img className="d-block w-100 rounded d-none d-md-block d-lg-none" src={`${cupcakeImg2}`} width={400} height={400} alt="img of cupcake" />
                    </Carousel.Item>
                </Carousel>
                <div className='text-start'>
                    <h1 className='mt-3 fs-4'>${`${cupcakePrice}` * count}</h1>
                    <p>{cupcake.product_desc}</p>
                </div>      
                    <Form onSubmit={handleSubmit}>
                        <Container className='mx-auto' style={{ width: '200px' }}>
                            <Row xs='auto'>
                                <Col className='ms-3 minus' onClick={() =>  count > 0 ? setCount(count - 1) : setCount(0) }> 
                                    <svg style={{ cursor: 'pointer' }} id="minus" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-patch-minus-fill" viewBox="0 0 16 16">
                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                                    </svg>
                                </Col>
                                <Col>
                                    <p className='mt-1'>{count}</p>
                                </Col>
                                <Col onClick={() => setCount(count + 1) }>
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
                            <Col className='w-30 p-3'>
                                <Button variant="primary" type="submit" className='rounded-pill mb-4'>
                                    Add to Cart
                                </Button>
                            </Col>
                        </Row>
                    </Form>
            </Container>
            <Container className="d-none d-lg-block my-5">
                <div className="card mb-3 border border-0">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <Carousel variant="success" fade>
                                <Carousel.Item interval={5000}>
                                    <img className="d-block w-100 rounded" src={`${cupcakeImg1}`} width={500} height={500} alt="img of cupcake" />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img className="d-block w-100 rounded" src={`${cupcakeImg2}`} width={500} height={500} alt="img of cupcake" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-6 bg-light">
                            <div className="card-body">
                                <h2 className="card-title fs-1 mb-4 mt-2">{cupcake.product_name}</h2>
                                <p className="card-text">{cupcake.product_desc}</p>
                                <h5 className='my-5 fs-4'>${`${cupcakePrice}` * count}</h5>
                                <Form onSubmit={handleSubmit}>
                                    <Container className='mx-auto' style={{ width: '200px' }}>
                                        <Row xs='auto'>
                                            <Col className='ms-3 minus' onClick={() =>  count > 0 ? setCount(count - 1) : setCount(0) }> 
                                                <svg style={{ cursor: 'pointer' }} id="minus" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-patch-minus-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                                                </svg>
                                            </Col>
                                            <Col>
                                                <p className='mt-1'>{count}</p>
                                            </Col>
                                            <Col onClick={() => setCount(count + 1) }>
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
                                        <Col className='w-30 p-3'>
                                            <Button variant="primary" type="submit" className='rounded-pill mb-4'>
                                                Add to Cart
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <ToastContainer/>
        </div>
    )
}