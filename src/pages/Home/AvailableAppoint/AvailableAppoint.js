import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Booking from '../Booking/Booking';
import { Alert, Container } from '@mui/material';
import { useState } from 'react';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 23,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 25,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 18,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 17,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 15,
        space: 10,
    },
]

const AvailableAppoint = ({ date }) => {
    const [booked, setBooked] = useState(false);
    return (
        <Container>
            <h2>Booking Available on {date.toDateString()}</h2>
            {
                booked && <Alert severity="success">Your appointment Booked Successfully</Alert>
            }
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        bookings.map(book => <Booking
                            key={book.id}
                            book={book}
                            date={date}
                            setBooked={setBooked}
                        ></Booking>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AvailableAppoint;