import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import banner from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const AppointmentBanner = () => {

    const appointmentBanner = {
        backgroundColor: 'gray',
        background: `url(${banner})`,
        margin: '80px',
        backgroundBlendMode: 'darken'
    }

    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: '-110px' }} src={doctor} alt="" />
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'start' }} item xs={12} md={6}>
                    <Box>
                        <Typography style={{ color: '#30D6B3' }} sx={{ my: 3 }} variant="h6">
                            Appointment
                        </Typography>
                        <Typography style={{ color: 'white' }} sx={{ my: 3, fontWeight: 500 }} variant="h4">
                            Make an Appointment today
                        </Typography>
                        <Typography style={{ color: 'white' }} sx={{ my: 3 }} variant="p">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ipsam vero recusandae omnis dolores modi quos animi, facilis minus autem.
                        </Typography>
                        <Button style={{ backgroundColor: '#30D6B3' }} sx={{ my: 3 }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;