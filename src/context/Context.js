import React, { useState } from "react";
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

    // target all cookies and stories them in the variable ~allCookies~
    const allCookies = Cookies.get();

    // takes the cookies in ~allCookies~ and converts them in a JSON object and stores in ~allCookiesObject~
    const allCookiesObject = Object.entries(allCookies);

    /**
     * for every item in ~allCookiesObject~ it looks through the cupcake data and checks if the item in ~allCookiesObject~ matches
     * an item in the cupcake data and if so then also get the price and img for the item 
     * then returns the name, amount ordered, image of cupcake, and price of cupcake as an object
     */
    let numberOfItemsInCart = 0; //keeps track of cupcakes in cart
    const cupcakesInCart = allCookiesObject.map(cupcake => {
        let productImgs;
        let productPrices;
        // loops through cupcake data file
        for(let j = 0; j < products.cupcakes.length;j++){
            if(products.cupcakes[j].product_name === cupcake[0]){
                productImgs = products.cupcakes[j].product_img
                productPrices = products.cupcakes[j].product_price
                numberOfItemsInCart++
            }
        }
        return {
            productName: cupcake[0],
            productCount: cupcake[1],
            productImg: productImgs,
            productPrice: productPrices
        }
    })
    
    //set total
    const [ total, setTotal ] = useState([]);
    const getTotal = () => {
        const totalPrice = cupcakesInCart.map(cupcake => {
            if(cupcake.productImg){
                return parseInt(cupcake.productCount) * cupcake.productPrice
            }
            else{
                return 0
            }
        })
        let sum = totalPrice.reduce((a,b) => a + b,0);
        setCookie('Total', sum)
        setTotal(sum)
        const test = Cookies.get('Total')
        console.log(test)
        console.log(`🎆🎆🎆${sum}`)
        return sum
    }

    // * items being provided to the contextapi to be used by all children
    const values = {
        setCookie,
        cupcakesInCart,
        allCookiesObject,
        numberOfItemsInCart,
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