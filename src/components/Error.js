import { Link } from "react-router-dom"

export function Error(){
    return(
        <div className="text-center mt-5">
            <h1 className="fs-1 mb-5 text-warning">404 Page Not Found</h1>
            <p className="fs-4 mb-5">The page you are looking for could not be found.</p>
            <Link to={`/`}>Click here to go back home</Link>
        </div>
    )
}