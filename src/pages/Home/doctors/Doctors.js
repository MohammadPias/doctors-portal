import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://protected-waters-90005.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <Container>
            <Grid container spacing={2}>
                {
                    doctors?.map(doctor =>
                        <Grid item xs={12} md={6} lg={4} key={doctor._id}>
                            <div><img style={{ width: '100px', height: '100px' }} src={`data:image/jpeg;base64,${doctor.image}`} alt="" /></div>
                            <Typography>
                                <h3>{doctor.name}</h3>
                            </Typography>
                        </Grid>)
                }

            </Grid>
        </Container>
    );
};

export default Doctors;