import { Box, CssBaseline, Grid } from '@mui/material'
import React from 'react'
import LoginImage from '../Login/LoginImage'
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <Box>
        <CssBaseline />
        <Grid container component="main">
        <Grid item xs={false} sm={4} md={7}  >
             <LoginImage />

        </Grid>
        <Grid item xs={12} sm={8} md={5}  component="paper" elevation={6} square>
           <RegisterForm />

        </Grid>
        </Grid>
    </Box>
  )
}

export default Register