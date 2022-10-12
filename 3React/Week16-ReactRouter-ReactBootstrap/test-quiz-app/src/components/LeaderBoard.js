import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { Navigate, useNavigate } from 'react-router-dom';

export default function LeaderBoard() {
  const [APIData, setAPIData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users`)
      .then((response) => {
        setAPIData(response.data)
        console.log('Here is APIData', response.data)
      })
  }, [])

  const getData = () => {
    axios.get(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users`)
      .then((getData) => {
        setAPIData(getData.data);
      }).then(() => {
        navigate('/quiz')
      })
  }

  const onDelete = async (id) => {
    try {
      const resp = await fetch(`https://631cbcad1b470e0e120961c6.mockapi.io/PromineoTechApi/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log('Delete resp:', resp)
      navigate('/leaderboard')
      return await resp.json();
    } catch (err) {
      console.log(
        "Oops, looks like onDelete had an issue.", err);
    }
  };


  return (
    <>
      <div className='text-center mt-3 font-face-f1r'>
        <h1 className='font-face-f1b'>Leaderboard</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {APIData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.username}</td>
                  <td>{data.score}</td>
                  <td>
                    <Button variant='warning' onClick={() => getData(data.id)}>Retake</Button>
                    <Button variant='danger' onClick={() => onDelete(data.id)}>Delete</Button>
                  </td>
                </tr>
              )
            }, [])}
          </tbody>
        </Table>
      </div>
    </>
  )
}
