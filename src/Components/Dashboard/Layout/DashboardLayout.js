import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import PropertiesCard from '../../PagesComponent/Dashboard/Card/PropertiesCard'
import ApproveProperty from '../PropertiesSection/ApproveProperty'
import PandingProperty from '../PropertiesSection/PandingProperty'
import RecentProperty from '../PropertiesSection/RecentProperty'
import DashboardSidebar from './DashboardSidebar'

const DashboardLayout = () => {
  return (
    <Box>
        <Grid container component="main" >
            <Grid item xs={3} sm={3} mb={3} mt={4} p={1}>
                <DashboardSidebar />

            </Grid>
            <Grid  item xs={8} sm={8} md={8}  p={3}>
                  <Typography variant='h6' pt={2}>
                     Dashboard
                  </Typography>
                  <PropertiesCard  />
                  <RecentProperty />
                  <ApproveProperty />
                  <PandingProperty />
                  
            </Grid>

        </Grid>

    </Box>
  )
}

export default DashboardLayout