import { Box } from '@mui/material'
import React from 'react'
import PathDashboard from './Sidebar/PathDashboard'
import Profile from './Sidebar/Profile'

const DashboardSidebar = () => {
  return (
    <Box   sx={{backgroundColor:'#454545' , borderRadius:'25px' , color:'white'}}>
       <Profile />
       <PathDashboard />
    </Box>
  )
}

export default DashboardSidebar