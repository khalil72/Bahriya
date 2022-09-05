
import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack';

import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom'







const SocialIcons = () => {
  
  return (
    <Box>
       <Grid container  spacing={12}  mb={6}>
      <Grid item xs={7} md={7} sm={12} >
        <Stack direction="row" spacing={2} ml={10}>
          <a href='https://www.facebook.com/property051/' alt="">
             <FacebookOutlined  sx={{color:'white'}} />
          </a>
          <a href='https://twitter.com/property051' alt="">
            <TwitterIcon  sx={{color:'white'}} />
          </a>
          <a href='https://www.linkedin.com/company/property051/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B5Tq%2FXUaWQlyltgWhPbkxSA%3D%3D' alt="">
          <LinkedInIcon sx={{color:'white'}} />
          </a>  
         <a href='https://www.youtube.com/c/Property051' alt=''>
         <YouTubeIcon  sx={{color:'white'}} />
         </a>
        
        </Stack>
      </Grid>
      <Grid item xs={5} md={5} sm={12}  >
          <Stack direction="row" spacing={12}>
            <Link  to='/home'  style={{ textDecoration: 'none', color: 'white'   }}>
              Home
              </Link>
              <Link  to='/aboutus'  style={{ textDecoration: 'none', color: 'white' }}>
                About us
              </Link>
              <Link  to='/product'  style={{ textDecoration: 'none', color: 'white' }}>
              Product
              </Link>
           </Stack>
      </Grid>
    </Grid>
    </Box>
  )
}

export default SocialIcons