import React,{ useContext } from "react"
import SiteContext from "../context/Context"

export function Checkout() {

    const { allCookies } = useContext(SiteContext)
    //console.log(allCookies)
    // const items = Object.keys(allCookies).map(key => 
    //     return {key}: {allCookies[key]}
    // )
    const items =  Object.entries(allCookies)

    console.log(items)
    // const itemName = Object.keys(allCookies).map(key => 
    //     <option value={key}>{allCookies[key]}</option>
    // )
    return (
        <div>
            <h1>This the checkout page</h1>
            <div>
                {/* {Object.keys(allCookies).map((key)=>(
                    <div>
                        <p>{key}</p>
                        <p>{allCookies[`${key}`]}</p>
                    </div>
                ))} */}
            </div>
        </div>
    )
}