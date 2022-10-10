import { Button } from "react-bootstrap";
import back from "../imgs/icons/back.png";

export function BackBtn(props) {
    console.log(props)
    return(
        <div className="mt-3 mx-2 d-flex justify-content-between">
            <Button variant="info" className="d-lg-none my-auto bg-light border border-0" href="/"><img src={back} width={40} height={40} alt="back button"/></Button>
            <h1 className="align-self-center">{props.page}</h1>
            <a href="/"><img src={"https://ik.imagekit.io/dod5kjssy/imgs/logo"} height={50} width={50} alt="logo" className="rounded-circle"></img></a>
        </div>
    )
}
