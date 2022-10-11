import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export function BodyGradient() {
    return(
        <div className="p-5 text-info main-gradient">
            <p>Welcome to Cupcake Makes, we're a business based in Plumas Lake, CA</p>
            <p>We offer both ordering predesigned cupcakes and making custom offers.</p>
            <div className="d-flex justify-content-center">
                <Button variant="success" className="rounded-pill"><Link to={`/custom`} className="text-decoration-none text-danger">Custom Order</Link></Button>
            </div>
        </div>
    )
}
