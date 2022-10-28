import { Link } from "react-router-dom"

export function FormSuccess(){
    return(
        <div className="text-center mt-5">
            <h1 className="fs-2">Order has been submitted!!</h1>
            <Link to={`/`}>Click here to go back home</Link>
        </div>
    )
}