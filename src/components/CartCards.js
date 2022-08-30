import React, { useState, useEffect, useContext } from "react"
import { Col, Row } from "react-bootstrap"
import Cookies from "js-cookie";
import SiteContext from "../context/Context"

export function CartCards(props) {

    // TODO: Clear cart ability needs to be added
    // // TODO: crashes if cart is visited when empty
    // TODO: issue with items not being displayed, replicated on phone
    // * Error: object is not valid as React child
    // * Solution: seems like an issue with the view app on network. Seems like this isn't an issue in production

    const [ count, setCount ] = useState(parseInt(props.amount))

    //import from context api
    const { setCookie } = useContext(SiteContext);

    useEffect(() =>{
        setCookie(props.name,count)
    },[count])

    const removeItem = () => {
        const elem = document.getElementById(`${props.name}`);
        elem.remove();
        Cookies.remove(`${props.name}`)
        console.log(elem)
    }
        
    return(
        <div className="d-flex border border-secondary rounded m-3" id={props.name}>
            <div className="flex-shrink-0 my-2 ps-1">
                <img className="rounded" src={`${props.img}`} alt="img of cupcake" width={80} height={80}/>
            </div>
            <div className="flex-grow-1 ms-3">
                <h2 className="mt-1">{props.name}</h2>
                <div className="d-inline-flex align-items-center w-100 justify-content-around">
                    <svg onClick={removeItem} style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                    <Row className="align-items-center justify-content-center">
                        <Col onClick={() =>  count > 0 ? setCount(count - 1) : setCount(0) }> 
                            <svg style={{ cursor: 'pointer' }} id="minus" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-patch-minus-fill" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
                            </svg>
                        </Col>
                        <Col>
                            <p className='m-auto'>{count}</p>
                        </Col>
                        <Col onClick={() => setCount(count + 1) }>
                            <svg style={{ cursor: 'pointer' }}  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-patch-plus-fill" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </Col>
                    </Row>
                    <p className="mb-0 me-2 fs-3">${count * props.price}</p>
                </div>
            </div>
        </div>
    )
}