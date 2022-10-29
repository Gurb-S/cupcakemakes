import { Link } from "react-router-dom"

export function EmailNotSent(){
    return(
        <div className="text-center mt-5">
            <h1 className="fs-1 mb-5 text-warning">Order could not be placed</h1>
            <h2 className="fs-4 mb-5">Please text "1" to (916) 572-8558 to report this issue</h2>
            <Link to={`/`}>Click here to go back home</Link>
        </div>
    )
}