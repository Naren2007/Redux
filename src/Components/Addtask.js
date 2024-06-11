import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Addtask = () => {
  const [title,Settitle] = useState('')
  const [description,Setdescription] = useState('')
  const Addtask = (e)=>{
      e.preventDefault()
      console.log({title,description})
  }
  return (
    <>
      <section className='my-5'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task Title</Form.Label>
            <Form.Control value={title} type="text" placeholder="Enter New Text" onChange={(e)=> Settitle(e.target.value)}/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Task Description</Form.Label>
            <Form.Control value={description} type="text" placeholder="Task Description" onChange={(e)=> Setdescription(e.target.value)} />
          </Form.Group>

          <div className='text-end'>
            <Button variant="primary" type="submit" onClick={(e)=>Addtask(e)}>
              Add New
            </Button>
          </div>
        </Form>
      </section>    
    </>
  )
}

export default Addtask