import { Box } from '@mui/material'
import React from 'react'
import AllProperties from '../../Components/PagesComponent/PropertyListing/AllProperties'

import PropertyHeader from '../../Components/PagesComponent/PropertyListing/PropertyHeader'

const ListingProperty = () => {
  return (
    <Box  sx={{backgroundColor:'#f4f4f4' , my:8 , height:'100vh' , mb:'0'}}>
     <PropertyHeader />
     <AllProperties />


    </Box>
  )
}

export default ListingProperty