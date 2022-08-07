import { Card, Col } from 'react-bootstrap';

export function ProductCard(props) {
    return(
        <Col className='mb-4'>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant='top' src={require(`../imgs/cake/${props.img}`)} width={150} height={150} />
                <Card.Body className='p-1 pt-2'>
                    <Card.Title className='fs-6'>{props.name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}