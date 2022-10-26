import { useState, useEffect } from "react";
import { browserName } from "react-device-detect";
import { format, differenceInDays } from 'date-fns'

function checkForIOS(){

    // checks if app is already in PWA mode 
    // if in PWA mode, exits the rest of the function and no prompt will be given
    // there is nothing that checks if PWA is already install and the user is chosing to view it through the website because the logic is that if PWA has been installed they will use that install and prompt will only show up once every 30
    if(navigator.standalone){
        return false;
    }

    if(browserName === "Mobile Safari"){
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    }
    // checks if user is using iOS and Safari browser
    // const ua = window.navigator.userAgent;
    // const webkit = !!ua.match(/WebKit/i);
    // const isIPad = !!ua.match(/iPad/i);
    // const isIPhone = !!ua.match(/iPhone/i)
    // const isIOS = isIPad || isIPhone;
    // const isSafari = isIOS && webkit && !ua.match(/CriOS/i);

    // checks the last time the install PWA prompt was shown to user
    const today = new Date()
    const lastPrompt = localStorage.getItem('installPrompt');
    const daysBetween = differenceInDays(lastPrompt, today)

    console.log(today)
    console.log(typeof lastPrompt)
    console.log(daysBetween)
    // if prompt has never been given or it has been more then 30 days then set prompt to true and set today's date for the date that prompt was given
    const prompt = (isNaN(daysBetween) || daysBetween > 30) &&  browserName === "Mobile Safari";
    //(isNaN(days) || days > 30) && 
    if(prompt && "localStorage" in window){
        localStorage.setItem("installPrompt", today);
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