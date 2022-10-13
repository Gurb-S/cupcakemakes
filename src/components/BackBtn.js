import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import back from "../imgs/icons/back.png";

export function BackBtn(props) {
    console.log(props)
    return(
        <div className="my-4 mx-2 d-flex justify-content-between web-mode pwa-mode">
            <Button variant="info" className="d-lg-none my-auto bg-light border border-0" href="/"><img src={back} width={40} height={40} alt="back button"/></Button>
            <h1 className="align-self-center">{props.page}</h1>
            <Link to={`/`}><img src={"https://ik.imagekit.io/dod5kjssy/imgs/logo"} height={50} width={50} alt="logo" className="rounded-circle"></img></Link>
        </div>
    )
}
