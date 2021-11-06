import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import login from '../../../images/login.png'
import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'

const Login = () => {
    const [logInData, setLogInData] = useState({});
    const { user, handleEmailLogin, error, isLodding } = useAuth();
    const history = useHistory();
    const location = useLocation();
    console.log(logInData);
    console.log(user);
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        handleEmailLogin(logInData.email, logInData.password, history, location)

    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <form onSubmit={handleLogin}>
                        <Typography variant="body1">Login</Typography>
                        <TextField
                            sx={{ width: '75%', mt: 3 }}
                            id="standard-basic"
                            label="name"
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
                        <Button type="submit" sx={{ width: '75%', my: 3 }} variant="contained">Login</Button>
                        <br />
                        <Box sx={{ width: '75%', mt: 3, mx: 'auto' }}>
                            {isLodding && <CircularProgress />}
                            {user?.email && <Alert severity="success">Sign in successfully</Alert>
                            }
                            {error && <Alert severity="error">{error}</Alert>
                            }
                        </Box>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Typography variant="p">Don't have an account? Register</Typography>
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

export default Login;