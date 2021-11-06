import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import banner from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
    background: `url(${bg})`,
    height: '550px'
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                            <Typography variant='h3' style={{ fontWeight: '600', marginTop: '10px' }}>
                                Your New Smile
                                <br />
                                Starts here
                            </Typography>
                            <Typography variant='p' style={{ fontWeight: '600', marginTop: '10px' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore deserunt rerum adipisci quaerat dicta aut iure! Pariatur, voluptas quasi.
                            </Typography>
                            <br />
                            <Button variant="contained" style={{ backgroundColor: '#30D6B3', marginTop: '10px' }}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                            <img style={{ width: '500px' }} src={banner} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;