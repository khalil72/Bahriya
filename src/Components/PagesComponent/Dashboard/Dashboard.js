import { Box,  } from '@mui/material'
import React from 'react'
import DashboardLayout from '../../Dashboard/Layout/DashboardLayout'


const Dashboard = () => {
  return (
    <Box sx={{backgroundColor:'#f4f4f4' , my:7 , mb:0 , width:'100%'}}>
      <DashboardLayout />
    </Box>
  )
}

export default Dashboard