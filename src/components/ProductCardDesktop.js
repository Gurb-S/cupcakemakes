import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export function ProductCardDesktop(props) {
    return (
        <Card className="bg-light text-white my-2">
            <Link to={`products/${props.id}`} className="text-white text-decoration-none">
                <Card.Img src={`${props.img}`} width={250} height={250} alt={`${props.name} Img`} />
                <Card.ImgOverlay className="overlay-gradient">
                <Card.Title className="fs-2">{props.name}</Card.Title>
                </Card.ImgOverlay>
            </Link>
        </Card>
    )
}