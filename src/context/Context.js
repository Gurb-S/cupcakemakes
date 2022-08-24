import React from "react";
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

    const allCookies = Cookies.get();

    const values = {
        setCookie,
        allCookies
    }
    //context provider that provides all the functions
    return(
        <SiteContext.Provider value={values}>
            {children}
        </SiteContext.Provider>
    )

}

export default SiteContext;