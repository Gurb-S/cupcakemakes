import { Card } from 'react-bootstrap';
import products from '../data/data.json'

export function ProductCardDisplay() {
    const product = products.products
    console.log(product[0].product_img);
    return(
        <Card style={{ width: '10rem' }}>
            <Card.Img variant='top' src={require(`../imgs/flower.jpeg`)} />
            <Card.Body className='p-1 pt-2'>
                <Card.Title className='fs-6'>{product[0].product_name}</Card.Title>
            </Card.Body>
        </Card>
        // <div className="card">
        //     <img src={require(`../imgs/${product[0].product_img}`)} className="card-img-top" alt="..."></img>
        //     <div className="card-body">
        //         <h2>{product[0].product_name}</h2>
        //         <p className="card-text">{product[0].product_desc}</p>
        //     </div>
        // </div>
    )
}