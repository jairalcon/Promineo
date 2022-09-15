import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [ APIData, setAPIData ] = useState([])
    useEffect(() => {
        axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/fakeData`)
            .then((response) => {
                setAPIData(response.data)
            })
    }, [])

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
        console.log(data);
    }
  return (
    <>
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Firs Name</th>
                    <th>Last Name</th>
                    <th>Checked</th>
                    <th>Update</th>
                </tr>
            </thead>

            <tbody>
                {APIData.map((data) => {
                    return(
                    <tr>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                        <td>
                            <Link to='/update'>
                                <Button onClick={() => setData(data)}>Update</Button>
                            </Link>
                        </td>
                    </tr>
                )})}              
            </tbody>
        </Table>
    </>
  )
}