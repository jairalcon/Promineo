import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    // initializing states
    const[ firstName, setFirstName ] = useState('');
    const[ lastName, setLastName ] = useState('');
    const[ checkbox, setCheckbox ] = useState(false);
    const navigate = useNavigate();

    // we'll use this function to send data to the API
    const postData = (e) => {
        console.log(`Post data ran on submit button`);
        e.preventDefault();
        axios.post(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
        navigate("/read/")
        console.log(firstName, lastName, checkbox);
    }

    return(
        <>
            <Form className='create-form'>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstName" placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your data.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastName" placeholder="Last Name" 
                        onChange={(e) => setLastName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="checkbox">
                    <Form.Check type="checkbox" 
                        label="I agree to the Terms and Conditions" 
                            onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Group>
                {/* added {postData} function to run every time submit is clicked */}
                <Button onClick={postData} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}