import React, { useContext, useEffect, useState } from "react"
import { addDays } from 'date-fns'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import SiteContext from "../context/Context";



export function OrderDate() {

    const { setCookie } = useContext(SiteContext);

    const [value, onChange] = useState(new Date());
    console.log(value)
    

    useEffect(() => {
        setCookie('Order Date', value)
    },[value])

    return(
        <form>
            <div className="text-center">
                <p className="fs-4 mb-1">When do you need your order by?</p>
                <p className="text-muted ">We require a 1 week notice in advance</p>
            </div>
            <div className="d-flex justify-content-center">
                <Calendar onChange={onChange} value={value} minDate={addDays(new Date(), 7)} maxDate={addDays(new Date(), 90)}/>
            </div>
        </form>
    )
}