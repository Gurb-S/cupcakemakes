import React, { useContext, useEffect, useState } from "react"
import SiteContext from "../context/Context"

export function Total() {

    // TODO: render automatically and change total everytime user adds more items while in cart

    const { total, getTotal } = useContext(SiteContext);
    //console.log(cupcakesInCart)
    useEffect(() => {
        getTotal()
    },[]);




    return(
        <div className="border border-secondary rounded m-3">
            <div className="text-bg-dark text-center fs-1">Order</div>
            <div className="mt-1 d-flex align-items-center justify-content-between">
                <h1 className="ms-2">Total:</h1>
                <h2 className="me-2">${total}</h2>
            </div>
        </div>
    )
}