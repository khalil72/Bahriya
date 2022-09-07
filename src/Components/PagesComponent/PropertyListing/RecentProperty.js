
import React from 'react'
import { Box, Card, Grid, Typography } from '@mui/material'
import ImageProperty from '../../../Assets/Images/1.jpg'

const RecentProperty = () => {
  return (
    <Box sx={{p:5 , my:0}}>
        <Card style={{height:'200px'}}>
          <Grid container p={2}>
            <Grid lg={4} sm={12} >
              <img src={ImageProperty}   alt='/'  width='100%'   style={{borderRadius:'25px' , height:'170px' , objectFit:'cover' }} />
            </Grid>
            <Grid lg={8} sm={12} >
                {/* PRICE TAG */}
                <Typography mx={2} variant='body1' component ='div' fontWeight={600}>
                     15Thousand
                </Typography>

                {/* Title */}
                <Typography mx={2} variant='h6' component ='div' fontWeight={500}>
                Reference site about 
                </Typography>
                <Typography mx={2} mb={1} nowrap variant='body1' component ='div' fontWeight={600}>
                  PropertyLocation 
                </Typography>
                <Typography variant='body2' component='div' mx={2}>
                 What is Lorem Ipsum in English?
                 Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content
                 Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content

                </Typography>
                

            </Grid>
          </Grid>
          
        </Card>

        <Card style={{height:'200px'  , marginTop:'10px'}}>
          <Grid container p={2}>
            <Grid lg={4} sm={12} >
              <img src={ImageProperty}   alt='/'  width='100%'   style={{borderRadius:'25px' , height:'170px' , objectFit:'cover' }} />
            </Grid>
            <Grid lg={8} sm={12} >
                {/* PRICE TAG */}
                <Typography mx={2} variant='body1' component ='div' fontWeight={600}>
                     15Thousand
                </Typography>

                {/* Title */}
                <Typography mx={2} variant='h6' component ='div' fontWeight={500}>
                Reference site about 
                </Typography>
                <Typography mx={2} mb={1} nowrap variant='body1' component ='div' fontWeight={600}>
                  PropertyLocation 
                </Typography>
                <Typography variant='body2' component='div' mx={2}>
                 What is Lorem Ipsum in English?
                 Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content
                 Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content

                </Typography>
                

            </Grid>
          </Grid>
          
        </Card>


    </Box>
  )
}

export default RecentProperty