import React, { useContext } from "react"
import SiteContext from "../context/Context"
import { CartCards } from "./CartCards"
import products from '../data/data.json'
import { Total } from "./Total"
import { OrderDate } from "./OrderDate"
import { Button } from "react-bootstrap"

export function Cart() {
    
    const { cupcakesInCart } = useContext(SiteContext)

    console.log(cupcakesInCart)

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
        if(item.productCount > 0 && item.productImg){
            return <CartCards 
                img={item.productImg}
                name={item.productName}
                amount={item.productCount}
                price={item.productPrice}
            />
        }
    })

    const handleSubmit = () =>{
        console.log('🎉🎉🎉')
        //alert slow and display last date clicked and not current
        alert(cupcakesInCart)
    }
    

    return (
        <div>
            <h1 className="text-center mt-3">Cart</h1>
            {cupcakesInCart && cartArray.length > 0 ? cartArray : <h2 className="text-center mt-5">Cart is Empty</h2>}
            <Total cupcakes={cupcakeDetails}/>
            {cupcakesInCart && cartArray.length > 0 ? <OrderDate /> : null}
            {cupcakesInCart && cartArray.length > 0 
            ?   
            <form onClick={handleSubmit} className="text-center my-4">
                <Button variant="outline-success">Place Order</Button>
            </form>
            : <></> }
        </div>
    )
}