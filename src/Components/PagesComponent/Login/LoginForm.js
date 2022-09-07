import { Box, CssBaseline, Grid } from '@mui/material'
import React from 'react'
import Form from './Form'
import LoginImage from './LoginImage'


const LoginForm = () => {
  return (
    <Box >
        <CssBaseline />
        <Grid container component="main">
        <Grid item xs={false} sm={4} md={7}  >
             <LoginImage />

        </Grid>
        <Grid item xs={12} sm={8} md={5}  component="paper" elevation={6} square>
           <Form />

        </Grid>
        </Grid>
       
    </Box>
  )
}

export default LoginForm