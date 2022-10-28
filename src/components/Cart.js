import React, { useContext } from "react"
import SiteContext from "../context/Context"
import { CartCards } from "./CartCards"
import { Total } from "./Total"
import { OrderDate } from "./OrderDate"
import { Button } from "react-bootstrap"
import { BackBtn } from "./BackBtn"
import { Link } from "react-router-dom"

export function Cart() {

    //import the from context api
    const { cupcakesInCart, numberOfItemsInCart, sendEmail } = useContext(SiteContext)

    // takes the attributes for items in cart and passes them into the CartCards component
    const cupcakeDetails = cupcakesInCart.map(item =>{
        if(item.productCount > 0 && item.productImg){
            return <CartCards 
                img={item.productImg[0]}
                name={item.productName}
                amount={item.productCount}
                price={item.productPrice}
                key={item.key}
            />
        }
        return null;
    })

    return (
        <div>
            <BackBtn page={"Cart"}/>
            <h1 className="text-center my-3 no-header">Cart</h1>
            {numberOfItemsInCart ? cupcakeDetails : <h2 className="text-center mt-5">Cart is Empty</h2>}
            <Total />
            {numberOfItemsInCart ? <OrderDate /> : null}
            {numberOfItemsInCart 
            ?   
            <div className="text-center my-4">
                <Button variant="primary" className="rounded-pill mb-4"><Link to={`/checkout`} className="text-decoration-none text-danger">Checkout</Link></Button>
            </div>
            : <></> }
        </div>
    )
}