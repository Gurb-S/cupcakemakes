import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { BackBtn } from './BackBtn';
import SiteContext from '../context/Context';
import { useContext } from 'react';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

export function Checkout(){


    // TODO: remember to add "required" to form fields 

    const { sendEmail, createCupcakeObject } = useContext(SiteContext)

    const navigate = useNavigate();

    const cupcakesInCart = createCupcakeObject();

    // filters out all cupcakes who has a 0 for product count and do do not contain an img. The allows you to filter out all none  cupcake cookies and any cupcake cookies that have 0 in cart
    const cupcakeDetails = cupcakesInCart.filter(item => item.productCount > 0 && item.productImg)

    const cupcakeOrder = cupcakeDetails.map((cupcake) =>{
        return(
            [
                cupcake.productName,
                cupcake.productCount
            ]
        )
    })
    // the total price of cupcakes in cart
    const totalPrice = parseInt(Cookies.get('Total'));
    const orderDate = Cookies.get('Order Date')

    //console.log(cupcakeOrder)
    // // console.log(orderDate)
    //console.log(cupcakesInCart,"😇")
    // for(let i = 0; i < cupcakesInCart.length; i++){
    //     if(cupcakesInCart[i].productName !== "installPrompt"){
    //         console.log(cupcakesInCart[i].productName)
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit me!!!!')
        //console.log(e.target.name.value)
        const name = e.target.name.value
        //console.log(e.target.phone.value)
        const phone = e.target.phone.value 
        //console.log(e.target.email.value)
        const email = e.target.email.value
        
        const data = {
            "order": [
                {
                    "customerInfo": 
                    {
                        "name": name,
                        "email": email,
                        "phoneNumber": phone
                    },
                },
                {
                    "orderInfo": {
                        "cupcakes": {
                            cupcakeOrder
                    },
                    Total: totalPrice,
                    orderDate: orderDate
                    }
                }
            ]
        }
        sendEmail(data)
            .then(res => {
                if(res === 200){
                    for(let i = 0; i < cupcakesInCart.length; i++){
                        if(cupcakesInCart[i].productName !== "installPrompt"){
                            Cookies.remove(cupcakesInCart[i].productName)
                        }
                    }
                    navigate(`/thanks`)
                }
                else if(res === 403){
                    navigate(`/order-error`)
                }
                else{
                    navigate(`/server-error`)
                }
            })
            .catch(error => {
                navigate(`/server-error`)
            })
    }

    return(
        <div className='text-center'>
            <BackBtn page={"Checkout"}/>
            <h1 className="my-4 no-header">Checkout</h1>
            <p>We do not ask for payment until we contact you and comfirm your order. Please complete and submit this form to place your order.</p>
            <Form name='checkout' method="POST" onSubmit={handleSubmit}>
                <Form.Group className='m-auto mb-3 text-center w-75 p-3' controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' name='name' placeholder='Enter your name' className='rounded-pill' required/>
                </Form.Group>
                <Form.Group className='m-auto mb-3 w-75 p-3' controlId='formBasicNumber'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type='tel' name='phone' placeholder='(555) 555-5555' className='rounded-pill' required/>
                </Form.Group>
                <Form.Group className='m-auto mb-3 text-center w-75 p-3' controlId="formBasicName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' name='email' placeholder='Enter your email' className='rounded-pill' required/>
                </Form.Group>
                <Button variant="primary" type="submit" className='rounded-pill px-4 mb-4'>Submit</Button>
            </Form>
        </div>
    )
}