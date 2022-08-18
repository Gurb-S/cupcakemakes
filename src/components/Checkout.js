import React, { useContext } from "react"
import SiteContext from "../context/Context"

export function Checkout() {

    // TODO: Clear cart ability needs to be added
    // TODO: crashes if cart is visited when empty
    // TODO: issue with items not being displayed, replicated on phone
    // * Error: object is not valid as React child

    const { allCookies } = useContext(SiteContext)

    console.log(allCookies)

    if(allCookies){
        console.log('NO COOKIESSSS')
        console.log(Object.keys(allCookies).length)
    }


    
    if(Object.keys(allCookies).length <= 0){
        console.log('THERE ARE NO COOKIESSSSSSSSS')

    }

    const items =  Object.entries(allCookies)

    const array = items.map(item  => {
        return {
            productName : item[0],
            productCount: item[1]
        }
    })
    console.log(array)
    const itemArray = array.map(item => {
        return <h2>{item.productName}: {item.productCount}</h2> 
    })


    return (
        <div>
            <h1 className="text-center mt-3">Checkout</h1>
            <div>
                {allCookies && itemArray.length > 0 ? itemArray : <h2>Cart is Empty</h2>}
            </div>
        </div>
    )
}