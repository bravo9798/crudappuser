import React from 'react'
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { useState } from 'react';


export default function Create(){
const [name, setName] = useState('');
const [gender, setGender] = useState('');
const [status, setStatus] = useState('');


const postData = () => {
        axios.post(`https://gorest.co.in/public/v1/users`, {
            name,
            gender,
            status,
        },
        )
    
}
 return(
    <div>
    <Form className="create-form">
    <Form.Field>
      <label >Name</label>
      <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
      <br></br>
    </Form.Field>
    <Form.Field>
      <label>Gender</label>
      <input placeholder='Male/Female' onChange={(e) => setGender(e.target.value)}/>

    </Form.Field>
    <Form.Field>
      <label>Status</label>
      <input placeholder='Active/Inactive' onChange={(e) => setStatus(e.target.value)}/>

    </Form.Field>
    
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
  </div>
)
}
