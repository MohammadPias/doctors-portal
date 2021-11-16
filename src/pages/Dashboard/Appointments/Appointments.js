import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Appointments = ({ date }) => {
    const [appointments, setAppointments] = useState([]);
    const { user } = useAuth();
    const newDate = date.toLocaleDateString();

    useEffect(() => {
        const url = `https://protected-waters-90005.herokuapp.com/appointments?email=${user.email}&date=${newDate}`;
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setAppointments(result)
                console.log(result)
            })
    }, [date]);
    console.log(appointments);
    return (
        <div>
            <h4>Appointments {appointments.length}</h4>
            <TableContainer component={Paper}>
                <Table sx={{}} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{`$${row.price}`}</TableCell>
                                <TableCell align="right">{row.payment ? "Paid" :
                                    <Link to={`dashboard/payment/${row._id}`}><button>pay</button></Link>
                                }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;