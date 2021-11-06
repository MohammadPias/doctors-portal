import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const About = () => {

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4} sx={{ mt: -8 }}>
                        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', px: 5, py: 2 }} style={{ backgroundColor: '#2BB988', borderRadius: 1 }} >
                            <Typography variant="h1" sx={{ color: 'white' }}>
                                <i class="far fa-clock"></i>
                            </Typography>
                            <Box sx={{ ml: 2 }}>
                                <Typography variant="h6" sx={{ color: 'white', textAlign: 'center' }}>
                                    Opening Hours
                                </Typography>
                                <Typography variant="p" sx={{ color: 'white', textAlign: 'center' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nisi!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ mt: -8 }}>
                        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', px: 5, py: 2 }} style={{ backgroundColor: '#385273', borderRadius: 1 }}>
                            <Typography variant="h1" sx={{ color: 'white' }}>
                                <i class="fas fa-map-marker-alt"></i>
                            </Typography>
                            <Box sx={{ ml: 2 }}>
                                <Typography variant="h6" sx={{ color: 'white', textAlign: 'center' }}>
                                    Visit our location
                                </Typography>
                                <Typography variant="p" sx={{ color: 'white', textAlign: 'center' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nisi!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} sx={{ mt: -8 }}>
                        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', px: 5, py: 2 }} style={{ backgroundColor: '#2BB988', borderRadius: 1 }}>
                            <Typography variant="h1" sx={{ color: 'white' }}>
                                <i class="fas fa-phone-volume"></i>
                            </Typography>
                            <Box sx={{ ml: 2 }}>
                                <Typography variant="h6" sx={{ color: 'white', textAlign: 'center' }}>
                                    Contact Us
                                </Typography>
                                <Typography variant="p" sx={{ color: 'white', textAlign: 'center' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nisi!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default About;