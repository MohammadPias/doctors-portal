import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctors = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [images, setImages] = useState(null);
    const [doctor, setDoctor] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (!images) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('images', images);

        fetch('https://protected-waters-90005.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setDoctor(true);
                }
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div>
            <h2>Add Doctors</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    onChange={(e) => setName(e.target.value)}
                    type="name"
                    required
                    label="name"
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    label="email"
                    variant="standard" />
                <br />
                <label htmlFor="contained-button-file">
                    <Input
                        sx={{ width: '50%', marginTop: '10px' }}
                        accept="image/*"
                        onChange={e => setImages(e.target.files[0])}
                        type="file" />
                    <br />
                    <Button
                        sx={{ width: '50%', marginTop: '10px' }}
                        variant="contained"
                        type="submit">
                        Upload
                    </Button>
                </label>
            </form>
            {error && <p>{error}</p>}
            {doctor && <p>Doctor added successfully</p>}
        </div>
    );
};

export default AddDoctors;