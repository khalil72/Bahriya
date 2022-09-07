
import React from 'react'
import { Box, CssBaseline, } from '@mui/material'
import bharia from '../../../Assets/Images/bahriya.png'


const LoginImage = () => {
  return (
     <Box>
        <CssBaseline />
      <Box sx={{
       backgroundImage:`url(${bharia})`,
      //   backgroundColor: (t) =>
      //    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'100vh'
      }}>

      </Box>

     

     </Box>
  )
}

export default LoginImage