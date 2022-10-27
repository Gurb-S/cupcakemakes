import React, { useContext } from "react"
import SiteContext from "../context/Context"
import { CartCards } from "./CartCards"
import { Total } from "./Total"
import { OrderDate } from "./OrderDate"
import { Button } from "react-bootstrap"
import { BackBtn } from "./BackBtn"

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

    const handleSubmit = () =>{
        console.log('🎉🎉🎉')
        const data = {
            "order": [
                {
                    "customerInfo": 
                    {
                        "name": 'Gurb',
                        "email": 'gurbakhash.sandhu1@gmail.com',
                        "phoneNumber": '(530)315-5032'
                    },
                },
                {
                    "orderInfo": {
                        "cupcakes": {
                            "cupcake1": {
                                "name": 'Blueberry Macaron',
                                "amount": 3
                            },
                            "cupcake2": {
                                "name": 'Salmon Swirl',
                                "amount": 1
                            }
                    },
                    Total: 345,
                    orderDate: '12/03/2022'
                }
                }
            ]
        }
        sendEmail(data)
    }
    

    return (
        <div>
            <BackBtn page={"Cart"}/>
            <h1 className="text-center my-3 no-header">Cart</h1>
            {numberOfItemsInCart ? cupcakeDetails : <h2 className="text-center mt-5">Cart is Empty</h2>}
            <Total />
            {numberOfItemsInCart ? <OrderDate /> : null}
            {numberOfItemsInCart 
            ?   
            <form onClick={handleSubmit} className="text-center my-4">
                <Button variant="primary" className="rounded-pill mb-4">Place Order</Button>
            </form>
            : <></> }
        </div>
    )
}