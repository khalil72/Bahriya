import { Box, Card, CardMedia, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ListingData from '../../Assets/Data/ListingData'
import { Link } from 'react-router-dom'


const ProjectListing = () => {
  return (
    <Box >
       <Typography variant='h5' component='div' fontWeight={600}>
        Discover New Projects
      </Typography>
      <Typography variant='subtitle1' style={{textDecoration:'none'}}>
        <Link to='/project'  style={{textDecoration:'none' , fontSize:'13px'}}>
          View All listing project
        </Link>
      </Typography>
        <Stack direction='row' spacing={5} pt={2}>
          
          {ListingData.map((item) => (
                  <Card sx={{width:'100%' , height:'100%'}}> 
                    
                      <CardMedia component='img'
                      image={item.image01}
                      alt='/'
                      height='200px'
              
                       />
                   
                  
                    <Box mx={1} mt={0} mb={0}>
                    <Typography variant='h6' fontWeight={600}>
                    {item.title}
                     </Typography>  
                    <Typography>
                    Investment: <span style={{color:'red'}}> {item.price}</span>
                     </Typography>
                     <Typography>
                    {item.type}
                     </Typography> 
                    </Box>
                   
                   
                  </Card>
                
              
            ))}
          
       
        </Stack>

    </Box>
  )
}

export default ProjectListing