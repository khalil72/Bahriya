import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ListMenu from './Footer/ListMenu'
import Products from './Footer/Products'
import SocialIcons from './Footer/SocialIcons'



const Footer = () => {
  return (
    <Box p={3}  sx={{backgroundColor:'#262f35' , color:'#cbcfd4' ,padding:4 }}>
      <SocialIcons />
      <Box mb={2}>
    <Typography variant='subtitle2' component='span' mx={10} >
       Personalised advertising: We show you more relevant advertising based on your activity. Prefer us not to? Opt Out of personalisation.
    </Typography>
    </Box>
      <ListMenu />
       
       {/* Partnersites */}
      <Products />
        <Box mt={2}>
        <Typography  component='span' mx={10} mt={2} sx={{fontSize:'0.75rem'}}>
       Property051.com is a part of Pin92 Media Pvt Ltd.All ©Copyright Reserved by Property051.com
     </Typography>
        </Box>
    
      
    </Box>
  )
}

export default Footer