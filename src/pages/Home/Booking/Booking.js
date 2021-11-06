import { Grid, Paper, Button } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import BookingModel from '../BookingModel/BookingModel';
import { handleBreakpoints } from '@mui/system';

const Booking = ({ book, date }) => {
    const { name, time, space } = book;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} md={6} lg={4}>
                <Paper elevation={3} sx={{ py: 5 }} >
                    <Typography sx={{ fontWeight: '500', color: 'info.main' }} variant="h5" >
                        {name}
                    </Typography>
                    <Typography sx={{ mt: 1 }} variant="h6" >
                        {time}
                    </Typography>
                    <Typography sx={{ mt: 1 }} variant="h6" >
                        Remaining-Seat: {space}
                    </Typography>
                    <Button onClick={handleOpen} sx={{ mt: 1 }} variant='contained'>Booking Now</Button>
                </Paper>
            </Grid>
            <BookingModel
                open={open}
                handleClose={handleClose}
                book={book}
                date={{ date }}
            ></BookingModel>
        </>
    );
};

export default Booking;