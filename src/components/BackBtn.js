import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import back from "../imgs/icons/back.png";

export function BackBtn(props) {
    console.log(props)
    return(
        <div className="m-0 mb-5 pt-5 d-flex web-mode pwa-mode justify-content-between bg-primary">
            <Button variant="info" className="d-lg-none my-auto ms-1 bg-primary border border-0" href="/"><img src={back} width={40} height={40} alt="back button"/></Button>
            <h1 className="align-self-center">{props.page}</h1>
            <Link to={`/`} className="me-2"><img src={"https://ik.imagekit.io/dod5kjssy/imgs/logo"} height={50} width={50} alt="logo" className="rounded-circle"></img></Link>
        </div>
    )
}
