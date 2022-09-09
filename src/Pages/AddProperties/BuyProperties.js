import { Box } from '@mui/material'
import React from 'react'
import BuyProperty from '../../Components/Dashboard/PropertiesSection/AddProperty/BuyProperty'

const BuyProperties = () => {
  return (
    <Box sx={{backgroundColor:'#f4f4f4' , my:8  , mb:'0'}}>
      <BuyProperty />
    </Box>
  )
}

export default BuyProperties