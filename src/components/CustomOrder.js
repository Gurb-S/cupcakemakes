import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { BackBtn } from './BackBtn';

export function CustomOrder() {
    return(
        <div>
            {/* <div className="mt-3 mx-2 d-flex justify-content-between">
                <BackBtn />
                <h1 className="align-self-center my-auto">Custom Order</h1>
                <a href="/" className='my-auto'><img src={"https://ik.imagekit.io/dod5kjssy/imgs/logo"} height={50} width={50} alt="logo" className="rounded-circle"></img></a>
            </div> */}
            {/* <h1 className="mx-auto mt-4" style={{width: "200px"}}>Custom Order</h1> */}
            <BackBtn page={"Custom Order"}/>
            <Form className='text-center'>
                <Form.Group className='m-auto mb-3 text-center w-75 p-3' controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter your name' className='rounded-pill'/>
                </Form.Group>
                <Form.Group className='m-auto mb-3 w-75 p-3' controlId='formBasicNumber'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type='tel' placeholder='(555) 555-5555' className='rounded-pill'/>
                </Form.Group>
                <Form.Group className='m-auto mb-3 w-75 p-3' controlId='formBasicDesc'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder='Describe the style of cupcakes you would like' style={{ height: '250px' }} className='rounded-4'/>
                </Form.Group>
                <Button variant="primary" type="submit" className='rounded-pill px-4 mb-4'>Submit</Button>
            </Form>
        </div>
    )
}