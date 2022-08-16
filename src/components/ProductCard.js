import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function ProductCard(props) {
    return(
        <Col className='mb-4'>
            <Card style={{ width: '10rem' }}>
            <Link to={`products/${props.id}`} className="link-dark text-decoration-none">
                <Card.Img variant='top' src={`${props.img}`} width={150} height={150} alt="img of cupcake" />
                <Card.Body className='p-1 pt-2'>
                    <Card.Title className='fs-6'>{props.name}</Card.Title>
                </Card.Body>
            </Link>
            </Card>
        </Col>
    )
}