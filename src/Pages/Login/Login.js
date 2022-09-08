import { Box, } from '@mui/material'
import React from 'react'
import LoginForm from '../../Components/PagesComponent/Login/LoginForm'

const Login = () => {
  return (
    
       <Box sx={{backgroundColor:'#f4f4f4' , my:8  , mb:'0'}}>
         <LoginForm />
       </Box>
    
   
  )
}

export default Login