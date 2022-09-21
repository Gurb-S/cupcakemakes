import { Button } from "react-bootstrap"

export function BodyGradient() {
    return(
        <div className="p-5 bg-secondary bg-gradient text-white" id="test">
            <p>Welcome to Cupcake Makes, we're a business based in Plumas Lake, CA</p>
            <p>We offer both ordering predesigned cupcakes and making custom offers.</p>
            <div className="d-flex justify-content-center">
                <Button variant="outline-dark" href="/custom" className="rounded-pill">Custom Order</Button>
            </div>
        </div>
    )
}
