import React from 'react'
import { Button, Table } from 'react-bootstrap'

export default function LeaderBoard() {
  return (
    <>
      <div className='text-center mt-3'>
        <h1>Leaderboard</h1>
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
            <tr>
              <td>1</td>
              <td>Racer 1</td>
              <td>10/10</td>
              <td>
                <Button variant='warning'>Retake</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}
