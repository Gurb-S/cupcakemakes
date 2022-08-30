import React, { useContext } from "react"
import SiteContext from "../context/Context"
import { CartCards } from "./CartCards"
import { Total } from "./Total"
import { OrderDate } from "./OrderDate"
import { Button } from "react-bootstrap"

export function Cart() {
    
    const { cupcakesInCart, allCookiesObject, numberOfItemsInCart } = useContext(SiteContext)

    console.log(cupcakesInCart)

    const cupcakeDetails = cupcakesInCart.map(item =>{
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
        alert(allCookiesObject)
    }
    

    return (
        <div>
            <h1 className="text-center mt-3">Cart</h1>
            {numberOfItemsInCart ? cupcakeDetails : <h2 className="text-center mt-5">Cart is Empty</h2>}
            <Total />
            {numberOfItemsInCart ? <OrderDate /> : null}
            {numberOfItemsInCart 
            ?   
            <form onClick={handleSubmit} className="text-center my-4">
                <Button variant="outline-success">Place Order</Button>
            </form>
            : <></> }
        </div>
    )
}