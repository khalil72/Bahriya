import React from 'react'
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import logo1 from '../../../Assets/Images/pin92img.png'



const ListMenu = () => {

  return (
    <Box mt={0}>
        <Stack  mx={10} mb={0}>
        <Stack direction="row" spacing={2}>
          <a href='https://www.pin92.com/'  target="_blank" >
            <img src={logo1}  alt='' width='50px'/> 
          </a>
          <a href='https://www.pin92.com/'  target="_blank" >
            <img src={logo1}  alt=''  width='50px'/> 
          </a>
          <a href='https://www.pin92.com/'  target="_blank" >
            <img src={logo1}  alt=''  width='50px'/> 
          </a>
          <a href='https://www.pin92.com/'  target="_blank" >
            <img src={logo1}  alt=''  width='50px'/> 
          </a>
          <a href='https://www.pin92.com/'  target="_blank" >
            <img src={logo1}  alt=''  width='50px'/> 
          </a> 
        </Stack>
    </Stack>
    
    </Box>
  )
}

export default ListMenu