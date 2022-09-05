import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Divider from '@mui/material/Divider';
import React from 'react'

const Products = () => {
  return (
    <Box>
        <Typography mx={10} variant='body2' mt={1} sx={{fontWeight: 'bold'}}>
      Partner Sites
      </Typography>
      <Stack mt={1} mx={10}>
          <Stack  direction="row" spacing={2}  sx={{}}>
             <a href='https://www.property051.com/' style={{textDecorationColor:'none' , textDecoration:'none' , 
              color:'#cbcfd4' , fontSize:' 0.75rem'}}>
               property051.com
              </a>
              <Divider orientation="vertical" flexItem color="#cbcfd4" />
              <a href='https://usmaniaforts.com/' style={{textDecorationColor:'none' , textDecoration:'none' , 
              color:'#cbcfd4' , fontSize:' 0.75rem'}}>
                usmaniaforts.com 
              </a>
              <Divider orientation="vertical" flexItem color="#cbcfd4" />
            <Typography  sx={{fontWeight: '400' , fontSize:' 0.75rem'}}>
              <a href='https://pineterraces.com//' style={{textDecorationColor:'none' , textDecoration:'none' , 
                color:'#cbcfd4' , fontSize:' 0.75rem'}}>
                  pineterraces.com 
                </a>
            </Typography>
          
            
          </Stack>
       </Stack>
    </Box>
  )
}

export default Products