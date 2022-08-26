import React from "react"

export function Total (){
    return(
        <div className="border border-secondary rounded m-3">
            <div className="text-bg-dark text-center fs-1">Order</div>
            <div className="mt-1 d-flex align-items-center justify-content-between">
                <h1 className="ms-2">Total:</h1>
                <h2 className="me-2">$200</h2>
            </div>
        </div>
    )
}