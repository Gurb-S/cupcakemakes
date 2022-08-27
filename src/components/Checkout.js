import React, { useContext, useEffect, useState } from "react"
import SiteContext from "../context/Context"
import { CartCards } from "./CartCards"
import products from '../data/data.json'
import { Total } from "./Total"
import { OrderDate } from "./OrderDate"

export function Checkout() {
    
    const { allCookies, total } = useContext(SiteContext)

    const cupcakesInCart =  Object.entries(allCookies)

    const cupcakeDetails = cupcakesInCart.map(cupcake  => {
        let productImgs;
        let productPrices;
        for(let j = 0; j < products.cupcakes.length;j++){
            if(products.cupcakes[j].product_name === cupcake[0]){
                productImgs = products.cupcakes[j].product_img
                productPrices = products.cupcakes[j].product_price

            }
        }
        return {
            productName : cupcake[0],
            productCount: cupcake[1],
            productImg: productImgs,
            productPrice: productPrices
        }
    })

    const cartArray = cupcakeDetails.map(item =>{
        if(item.productCount > 0){
            return <CartCards 
                img={item.productImg}
                name={item.productName}
                amount={item.productCount}
                price={item.productPrice}
            />
        }
    })


    return (
        <div>
            <h1 className="text-center mt-3">Checkout</h1>
            {allCookies && cartArray.length > 0 ? cartArray : <h2 className="text-center mt-5">Cart is Empty</h2>}
            <Total />
            <OrderDate />
        </div>
    )
}