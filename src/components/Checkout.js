import React,{ useContext } from "react"
import SiteContext from "../context/Context"

export function Checkout() {

    // TODO: Clear cart ability needs to be added
    const { allCookies } = useContext(SiteContext)

    const items =  Object.entries(allCookies)

    const array = items.map(item  => {
        return {
            productName : item[0],
            productCount: item[1]
        }
    })
    console.log(array)
    console.log(array[0].productName)
    const itemArray = array.map(item => {
        return <>
            <h2>{item.productName}: {item.productCount}</h2> 
        </> 
    })

    return (
        <div>
            <h1>This the checkout page</h1>
            <div>
                {itemArray}
            </div>
        </div>
    )
}