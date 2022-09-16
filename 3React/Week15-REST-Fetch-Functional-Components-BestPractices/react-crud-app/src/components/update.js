import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
// import axios from 'axios';

export default function Update() {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ checkbox, setCheckbox ] = useState(false);
    
    const [ id, setID ] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);

    let formData = {
        firstName,
        lastName,
        checkbox,
        id
    }

    console.log('formData:', formData);

    //Update request
    const updateAPIData = async (event) => {
        console.log('event:', event)
        try {
            const resp = await fetch(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/fakeData/${event.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(event),
            });
            console.log('resp:', resp)
            return await resp.json();
        } catch (error) {
            console.log(
                "Oh no! There was an error with updating your review.",
                error
            );
        }
    };

    return (
        <>
            <Form className='create-form'>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstName" placeholder="First Name" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your data.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastName" placeholder="Last Name" value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="checkbox">
                    <Form.Check type="checkbox"
                        label="I agree to the Terms and Conditions" value={checkbox}
                        onChange={(checkbox) => setCheckbox(!checkbox)} />
                </Form.Group>
                {/* added {postData} function to run every time submit is clicked */}
                <Button onClick={() => updateAPIData(formData)} variant="success" type="button">
                    Update
                </Button>
            </Form>
        </>
    );
}


// const updateAPIData = async (event) => {
    //     console.log('event:', event);
    //     try {
    //         const resp = await axios.put(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/fakeData/${event.id}`)
    //         console.log(resp.data);
    //         return await resp.json();
    //     } catch (err) {
    //         console.log('Oops, looks like updateAPIData had an issue.', err);
    //     }
    //     console.log('updateAPIData:', updateAPIData());
    // }