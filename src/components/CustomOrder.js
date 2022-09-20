import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export function CustomOrder() {
    return(
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
                <Form.Label>Descibe the style of cupcakes you would like</Form.Label>
                <Form.Control as='textarea' rows={3} className='rounded-4'/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}