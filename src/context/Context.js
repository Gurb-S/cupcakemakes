import React from "react";
import Cookies from "js-cookie";
import products from '../data/data.json'


export const SiteContext = React.createContext();

export function SiteProvider({ children }){

    const setCookie = (name, count) => {
        const cookieOptions = {
            expires: 1, //1 day
            secure: true,  
            sameSite: "None"
        };
        Cookies.set(`${name}`, count, cookieOptions)
    }

    const allCookies = Cookies.get();

    const allCookiesObject = Object.entries(allCookies);

    const cupcakesInCart = allCookiesObject.map(cupcake  => {
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

    const values = {
        setCookie,
        cupcakesInCart,
        allCookiesObject
    }

    //context provider that provides all the functions
    return(
        <SiteContext.Provider value={values}>
            {children}
        </SiteContext.Provider>
    )

}

export default SiteContext;