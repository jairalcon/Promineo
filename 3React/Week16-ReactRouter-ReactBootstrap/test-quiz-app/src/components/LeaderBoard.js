import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { usersAPI } from '../rest/Endpoint';

export default function LeaderBoard() {
  // useEffect(() => {
  //   usersAPI.get()      
  // }, [])
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
          {usersAPI.get((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.username}</td>
                <td>{data.score}</td>
                <td>
                  <Button variant='warning'>Retake</Button>
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
