import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import login from '../../images/login.png'
import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const [logInData, setLogInData] = useState({});
    const { user, handleEmailRegister, isLodding, error } = useAuth();
    console.log(logInData);
    // console.log(user);
    console.log(logInData.email, logInData.password);

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
    };
    // console.log(logInData.password, logInData.password2)
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(logInData)
        if (logInData.password !== logInData.password2) {
            alert("Password don't match");
            return;
        }
        console.log(handleEmailRegister);
        handleEmailRegister(logInData.email, logInData.password);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <form onSubmit={handleRegister}>
                        <Typography variant="body1">Register</Typography>
                        <TextField
                            sx={{ width: '75%', mt: 3 }}
                            id="standard-basic"
                            label="name"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', mt: 3 }}
                            id="standard-password-input"
                            label="Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', mt: 3 }}
                            id="standard-password-input"
                            label="Password"
                            name="password2"
                            onChange={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button type="submit" sx={{ width: '75%', my: 3 }} variant="contained">Register</Button>
                        <br />
                        <Box sx={{ width: '75%', mt: 3, mx: 'auto' }}>
                            {isLodding && <CircularProgress />}
                            {user?.email && <Alert severity="success">Registration has been successful</Alert>
                            }
                            {error && <Alert severity="error">{error}</Alert>
                            }
                        </Box>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Typography variant="p">Already have an account? Login</Typography>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Register;