import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';


const accessToken='7de686649d50b75cc361593fbc01f5484a21b47e1a371044441417ee3e46f850'
axios.interceptors.request.use(
    config=>{
        config.headers.authorization=`Bearer ${accessToken}`
    },
    error=>{
        return Promise.reject(error);
    }
)

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setGender(localStorage.getItem('Gender'));
        setStatus(localStorage.getItem('Status'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://gorest.co.in/public/v1/users/${id}`, {
            name,
            gender,
            status
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Gender</label>
                    <input placeholder='Male/Female' value={gender} onChange={(e) => setGender(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Gender</label>
                    <input placeholder='Active/Inactive' value={status} onChange={(e) => setStatus(e.target.value)}/>
                </Form.Field>
               
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}