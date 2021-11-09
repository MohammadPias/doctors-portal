import { Alert, Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const user = { email };

        fetch('https://protected-waters-90005.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    setSuccess(true);
                }
            })
    }
    return (
        <div>
            <h2>makeAdmin</h2>
            {success && <Alert severity="success">You added {email} as a admin</Alert>}
            <form style={{ width: '300px', margin: 'auto' }} onSubmit={handleOnSubmit}>
                <TextField style={{ width: '100%', marginBottom: '15px' }} onBlur={handleOnBlur} label="email" variant="standard" />
                <br />
                <Button style={{ width: '100%', marginBottom: '15px' }} type="submit" variant="contained">Add</Button>
            </form>
        </div >
    );
};

export default MakeAdmin;