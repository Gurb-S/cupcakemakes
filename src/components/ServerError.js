import { Link } from "react-router-dom"

export function ServerError(){
    return(
        <div className="text-center mt-5">
            <h1 className="fs-1 mb-5 text-warning">404 Server Error</h1>
            <p className="fs-4 mb-3">There was an issue connecting with the server. Please check that you are connected to the internet and try again.</p>
            <p className="fs-4 mb-5">If issue persists text "2" to (916) 572-8558 to report this issue.</p>
            <Link to={`/`}>Click here to go back home</Link>
        </div>
    )
}