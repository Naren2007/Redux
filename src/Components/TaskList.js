import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
const TaskList = () => {
    const updateTask = ()=>{
        console.log('update')
    }
    const deleteTask = ()=>{
        console.log('delete')
    }
  return (
    <Table striped bordered hover>
      <thead>
        <tr className='text-centre'>
          <th>#</th>
          <th>Task</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Button variant='primary' onClick={()=>updateTask()} className='mx-3'><i className="bi bi-pencil-fill"></i></Button>
            <Button variant='primary' onClick={()=>deleteTask()}><i className="bi bi-trash-fill"></i></Button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TaskList