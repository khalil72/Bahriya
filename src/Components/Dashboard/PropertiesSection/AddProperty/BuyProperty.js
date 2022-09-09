import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import DashboardSidebar from '../../Layout/DashboardSidebar'
import BuyForm from './AddForm/BuyForm'

const BuyProperty = () => {
  return (
    <Box>
        <Grid container component="main">
          <Grid item xs={3} sm={3} mb={3} mt={4} p={1}>
                <DashboardSidebar />
           </Grid>
           <Grid  item xs={8} sm={8} md={8}  p={3}>
              <Typography variant='h6' fontWeight={600}> 
              Add Buy Property
              </Typography>

              <BuyForm />


            </Grid>

        </Grid>

    </Box>
  )
}

export default BuyProperty