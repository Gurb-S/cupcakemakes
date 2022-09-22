import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import products from '../data/data.json'

// * ~variable/array/object~

export const SiteContext = React.createContext();

export function SiteProvider({ children }){

    // function that allows you to easily create cookies
    const setCookie = (name, count) => {
        const cookieOptions = {
            expires: 1, //1 day
            secure: true,  
            sameSite: "None"
        };
        Cookies.set(`${name}`, count, cookieOptions)
    }

    // * READING COOKIES


    const getCookies = () => {
        // target all cookies and stories them in the variable ~allCookies~
        const allCookies = Cookies.get();
        
        // takes the cookies in ~allCookies~ and converts them in a JSON object and stores in ~allCookiesObject~
        const allCookiesObject = Object.entries(allCookies);
        return allCookiesObject
    }

    /**
     * for every item in ~allCookiesObject~ it looks through the cupcake data and checks if the item in ~allCookiesObject~ matches
     * an item in the cupcake data and if so then also get the price and img for the item 
     * then returns the name, amount ordered, image of cupcake, and price of cupcake as an object
     */

    //const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0)
    let numberOfItemsInCart = 0; //keeps track of cupcakes in cart
    const createCupcakeObject = () => {
        const allCookiesObject = getCookies();
        const cupcakesInCart = allCookiesObject.map(cupcake => {
            let productImgs;
            let productPrices;
            // loops through cupcake data file
            for(let j = 0; j < products.cupcakes.length;j++){
                if(products.cupcakes[j].product_name === cupcake[0]){
                    productImgs = [
                        products.cupcakes[j].product_img[0],
                        products.cupcakes[j].product_img[1]
                    ]
                    productPrices = products.cupcakes[j].product_price
                    numberOfItemsInCart ++
                }
            }
            return {
                productName: cupcake[0],
                productCount: cupcake[1],
                productImg: productImgs,
                productPrice: productPrices
            }
        })
        return cupcakesInCart
    }
    //called here to be able to pass in
    const cupcakesInCart = createCupcakeObject();

    //keeps track of the total in cart
    //not sure if I actually need this
    const [ total, setTotal ] = useState([]);

    /**
     * 
     * @returns number - a number that is the total of all the items in the cart
     */
    const getTotal = () => {
        const cupcakesInCart = createCupcakeObject();
        const totalPrice = cupcakesInCart.map(cupcake => {
            if(cupcake.productImg){
                return parseInt(cupcake.productCount) * cupcake.productPrice
            }
            else{
                return 0
            }
        })
        //console.log(allCookiesObject)
        let sum = totalPrice.reduce((a,b) => a + b,0);
        setCookie('Total', sum)
        setTotal(sum)
        const test = Cookies.get('Total')
        //console.log(createCupcakeObject())
        console.log(`🎆🎆🎆${sum}`)
        return sum
    }

    // * items being provided to the contextapi to be used by all children
    const values = {
        setCookie,
        cupcakesInCart,
        numberOfItemsInCart,
        createCupcakeObject,
        total,
        getTotal
    }

    /**
     * the App.js is surrounded by the Provider context and the {children} refers to the App.js 
     * the value={values} is the items being passed into the other children
     */
    return(
        <SiteContext.Provider value={values}>
            {children}
        </SiteContext.Provider>
    )

}

export default SiteContext;