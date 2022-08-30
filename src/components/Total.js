import React, { useContext, useEffect } from "react"
import SiteContext from "../context/Context"

export function Total() {

    // TODO: render automatically and change total everytime user adds more items while in cart

    const { setCookie, cupcakesInCart } = useContext(SiteContext);
    console.log(cupcakesInCart)

    const totalPrice = cupcakesInCart.map(cupcake => {
        if(cupcake.productImg){
            return parseInt(cupcake.productCount) * cupcake.productPrice
        }
        else{
            return 0
        }
    })

    let sum = totalPrice.reduce((a,b) => a + b,0);

    useEffect(() => {
        setCookie('Total', sum)
    },[sum]);


    return(
        <div className="border border-secondary rounded m-3">
            <div className="text-bg-dark text-center fs-1">Order</div>
            <div className="mt-1 d-flex align-items-center justify-content-between">
                <h1 className="ms-2">Total:</h1>
                <h2 className="me-2">${sum}</h2>
            </div>
        </div>
    )
}