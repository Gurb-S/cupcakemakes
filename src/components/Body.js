import { ProductCard } from "./ProductCard";

export function Body() {
    return(
        <div className="text-center">
            <h1 className="mt-3 fs-1">
                CUPCAKES
            </h1>
            <p className="text-muted">*All cupcakes start at $15</p>
            <div className="container">
            <hr className="mb-3"></hr>
                <div className="row align-items-start">
                    <div className="col mb-5">
                        <ProductCard />
                    </div>
                    <div className="col mb-5">
                        <ProductCard />
                    </div>
                    <div className="col mb-5">
                        <ProductCard />
                    </div>
                    <div className="col mb-5">
                        <ProductCard />
                    </div>
                </div>
            </div>
            {/* Move this to the end */}
            {/* <h4 className="text-center text-decoration-underline">View More</h4> */}
        </div>
    )
}