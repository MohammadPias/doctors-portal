import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../Hooks/useAuth'
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModel = ({ open, handleClose, book, date, setBooked }) => {
    // const [addAppoint, setAddAppoint] = useState([]);
    const { user } = useAuth();
    const { name, time } = book;
    const initialInfo = {
        patientName: user?.name,
        email: user?.email,

    }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    // console.log(bookingInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBooking = e => {
        e.preventDefault();

        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.date.toLocaleDateString()
        }
        fetch('https://protected-waters-90005.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setBooked(true)
                    handleClose();
                }
            })
    }
    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleBooking}>
                            <TextField
                                disabled
                                style={{ width: '90%', margin: '8px' }}
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                disabled
                                style={{ width: '90%', margin: '8px' }}
                                id="outlined-size-small"
                                defaultValue={date.date.toDateString()}
                                size="small"
                            />
                            <TextField
                                required
                                style={{ width: '90%', margin: '8px' }}
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name="patientName"
                                defaultValue={user?.displayName}
                                size="small"
                            />
                            <TextField
                                required
                                style={{ width: '90%', margin: '8px' }}
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name="email"
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                required
                                style={{ width: '90%', margin: '8px' }}
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name="phone"
                                placeholder="Phone"
                                size="small"
                            />
                            <Button variant="contained" type="submit">Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModel;