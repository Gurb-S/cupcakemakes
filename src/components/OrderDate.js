import React, { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns'


export function OrderDate() {

    // const [ minAllowDate, setMinAllowDate ] = useState('');
    // const [ selectedDate, setSelectedDate ] = useState(null);

    // useEffect(() => {
    //     const todayDate = new Date().toLocaleString().split(',')
    //     setMinAllowDate(todayDate[0])
    //     console.log(todayDate[0])
    // },[])
    const [startDate, setStartDate] = useState(new Date());

    return(
        <form>
            <div className="d-flex justify-content-center align-items-center">
                <label className="mt-2 ms-2 fs-5">Need by:</label>
                <DatePicker className="text-center"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={addDays(new Date(), 7)}
                    maxDate={addDays(new Date(), 90)}
                    placeholderText="Select a date before 5 days in the future"
                />
            </div>
        </form>
    )
}