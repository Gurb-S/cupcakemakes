import React, { useContext } from "react"
import SiteContext from "../context/Context"
import products from '../data/data.json'
import { Card } from "react-bootstrap"

export function CartCards() {

    // TODO: Clear cart ability needs to be added
    // TODO: crashes if cart is visited when empty
    // TODO: issue with items not being displayed, replicated on phone
    // * Error: object is not valid as React child
    // * Solution: seems like an issue with the view app on network. Seems like this isn't an issue in production

    const { allCookies } = useContext(SiteContext)

    // console.log(allCookies)

    // if(allCookies){
    //     console.log('NO COOKIESSSS')
    //     console.log(Object.keys(allCookies).length)
    // }

    // if(Object.keys(allCookies).length <= 0){
    //     console.log('THERE ARE NO COOKIESSSSSSSSS')
    // }

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

   // * move the above contents back to the checkout page and page in the data via props to this page
   // * and use it to create the cards for each item and can easier check for product count being 0
   // * similar relationship between body and product page

    const itemArray = cupcakeDetails.map(item => {
        return (
            (item.productCount > 0 ?
            <div className="d-flex border border-secondary rounded m-3">
                <div className="flex-shrink-0 my-2 ps-1">
                    <img className="rounded" src={`${item.productImg}`} alt="img of cupcake" width={80} height={80}/>
                </div>
                <div className="flex-grow-1 ms-3">
                    <h2 className="mt-1">{item.productName}</h2>
                    <div className="d-inline-flex">
                        <p>{item.productCount}</p>
                        <p>${item.productCount * item.productPrice}</p>
                    </div>
                </div>
            </div>
            : null)
        )
    })
    
    return(
        <div>
            {allCookies && itemArray.length > 0 ? itemArray : <h2 className="text-center mt-5">Cart is Empty</h2>}
        </div>
    )
}