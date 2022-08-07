import { Card, Col } from 'react-bootstrap';
import products from '../data/data.json'

export function ProductCardDisplay(props) {
    const product = products.products
    console.log(product[0].product_img);
    return(
        <Col className='mb-4'>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant='top' src={require(`../imgs/${props.img}`)} width={150} height={150} />
                <Card.Body className='p-1 pt-2'>
                    <Card.Title className='fs-6'>{props.name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
        // <div className="card">
        //     <img src={require(`../imgs/${product[0].product_img}`)} className="card-img-top" alt="..."></img>
        //     <div className="card-body">
        //         <h2>{product[0].product_name}</h2>
        //         <p className="card-text">{product[0].product_desc}</p>
        //     </div>
        // </div>
    )
}