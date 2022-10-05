import { Button } from "react-bootstrap"

export function BodyGradient() {
    return(
        <div className="p-5 text-info main-gradient">
            <p>Welcome to Cupcake Makes, we're a business based in Plumas Lake, CA</p>
            <p>We offer both ordering predesigned cupcakes and making custom offers.</p>
            <div className="d-flex justify-content-center">
                <Button variant="success" href="/custom" className="rounded-pill">Custom Order</Button>
            </div>
        </div>
    )
}
