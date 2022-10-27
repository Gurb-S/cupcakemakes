import { useState, useEffect } from "react";
import { browserName } from "react-device-detect";
import Cookies from "js-cookie";

function checkForIOS(){

    // checks if app is already in PWA mode 
    // if in PWA mode, exits the rest of the function and no prompt will be given
    // there is nothing that checks if PWA is already install and the user is chosing to view it through the website because the logic is that if PWA has been installed they will use that install and prompt will only show up once every 30
    if(navigator.standalone){
        return false;
    }

    const setCookie = (name, count) => {
        const cookieOptions = {
            expires: 30, //1 day
            secure: true,  
            sameSite: "None"
        };
        Cookies.set(`${name}`, count, cookieOptions)
    }

    const installPrompt = Cookies.get('installPrompt')
    const prompt = !installPrompt && browserName === "Mobile Safari";

    if(prompt && "localStorage" in window){
        // sets a delay so that if no installPrompt cookie is set, we can show the modal before one gets set
        setTimeout(() =>{
            setCookie('installPrompt', 0)
        },1000)
    }

    return {prompt};
}

export function useIsIOS(){
    const [isIOS, setIsIOS ] = useState({});

    useEffect(()=>{
        setIsIOS(checkForIOS());
        return() => console.log("CLEANUP INSTALL PROMPT", isIOS);
    },[]);

    return isIOS;
}