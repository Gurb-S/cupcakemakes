import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export function BodyGradient() {

    let isInWebAppiOS = (window.navigator.standalone === true);
    let isInWebAppChrome = (window.matchMedia('(display-mode: standalone)').matches);

    return(
        <div className={isInWebAppiOS || isInWebAppChrome ? "p-5 mt-5 text-info main-gradient" : "p-5 text-info main-gradient"}>
            <p className={isInWebAppiOS || isInWebAppChrome ? "mt-5" : ''}>Welcome to Cupcake Makes, we're a business based in Plumas Lake, CA</p>
            <p className="text-center">We offer both ordering predesigned cupcakes and placing custom orders!</p>
            <div className="d-flex justify-content-center">
                <Button variant="success" className="rounded-pill"><Link to={`/custom`} className="text-decoration-none text-danger">Custom Order</Link></Button>
            </div>
        </div>
    )

}
