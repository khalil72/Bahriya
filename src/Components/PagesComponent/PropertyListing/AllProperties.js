import { Box, Grid } from '@mui/material'
import React from 'react'
import FeatureProperty from './FeatureProperty'
import RecentProperty from './RecentProperty'

const AllProperties = () => {
  return (
    <Box>
        <Grid container>
            <Grid lg={8} sm={12}>
                <RecentProperty />
            </Grid>
            <Grid lg={4} sm={12}>
                <FeatureProperty />
            </Grid>

        </Grid>

    </Box>
  )
}

export default AllProperties