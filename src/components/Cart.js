import React, { useContext } from "react"
import SiteContext from "../context/Context"
import { CartCards } from "./CartCards"
import { Total } from "./Total"
import { OrderDate } from "./OrderDate"
import { Button } from "react-bootstrap"
import { BackBtn } from "./BackBtn"

export function Cart() {

    //import the from context api
    const { cupcakesInCart, numberOfItemsInCart } = useContext(SiteContext)

    // takes the attributes for items in cart and passes them into the CartCards component
    const cupcakeDetails = cupcakesInCart.map(item =>{
        if(item.productCount > 0 && item.productImg){
            return <CartCards 
                img={item.productImg[0]}
                name={item.productName}
                amount={item.productCount}
                price={item.productPrice}
            />
        }
    })

    const handleSubmit = () =>{
        console.log('🎉🎉🎉')
        //alert slow and display last date clicked and not current
        //alert(allCookiesObject)
        //this should be the final submit function
    }
    

    return (
        <div>
            <div className="mt-3 mx-2 d-flex justify-content-between">
                <BackBtn />
                <h1 className="align-self-center">Cart</h1>
                <a href="/"><img src={"https://ik.imagekit.io/dod5kjssy/imgs/logo"} height={50} width={50} alt="logo" className="rounded-circle"></img></a>
            </div>
            {numberOfItemsInCart ? cupcakeDetails : <h2 className="text-center mt-5">Cart is Empty</h2>}
            <Total />
            {numberOfItemsInCart ? <OrderDate /> : null}
            {numberOfItemsInCart 
            ?   
            <form onClick={handleSubmit} className="text-center my-4">
                <Button variant="outline-success" className="rounded-pill">Place Order</Button>
            </form>
            : <></> }
        </div>
    )
}