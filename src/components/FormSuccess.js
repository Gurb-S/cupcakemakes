import { Link } from "react-router-dom"

export function FormSuccess(){
    return(
        <div className="text-center mt-5">
            <h1 className="fs-2 mb-5">Order has been submitted🎉</h1>
            <h2 className="fs-4 mb-5">You will get a confirmation email soon!</h2>
            <Link to={`/`}>Click here to go back home</Link>
        </div>
    )
}