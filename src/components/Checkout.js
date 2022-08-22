import React, { useContext } from "react"
import SiteContext from "../context/Context"
import products from '../data/data.json'

export function Checkout() {

    // TODO: Clear cart ability needs to be added
    // TODO: crashes if cart is visited when empty
    // TODO: issue with items not being displayed, replicated on phone
    // * Error: object is not valid as React child
    // * Solution: seems like an issue with the view app on network. Seems like this isn't an issue in production

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
                {allCookies && itemArray.length > 0 ? itemArray : <h2 className="text-center mt-5">Cart is Empty</h2>}
            </div>
        </div>
    )
}