import {  Box, Card } from '@mui/material'
import React from 'react'
import CityTab from '../../Tabs/CityTab'


const PropertyHeader = () => {
  return (
    <Box >
        <Card sx={{borderRadius:'0' , p:2 }}>
           <CityTab />
        </Card>
    </Box>
  )
}

export default PropertyHeader