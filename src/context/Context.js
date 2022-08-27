import React, { useState } from "react";
import Cookies from "js-cookie";

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

    const [total, setTotal] = useState(0);

    const addTotal = (price) => {
        setTotal((prevState) => prevState + price )
    }

    const removeTotal = (price) => (
        setTotal((prevState) => prevState - price )
    )

    const allCookies = Cookies.get();

    const values = {
        setCookie,
        allCookies,
        total,
        addTotal
    }
    //context provider that provides all the functions
    return(
        <SiteContext.Provider value={values}>
            {children}
        </SiteContext.Provider>
    )

}

export default SiteContext;