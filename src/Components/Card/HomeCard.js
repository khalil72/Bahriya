
import React from 'react'
import { Box, Button, CardMedia,  Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import payRent from '../../Assets/Images/payRent.svg'

import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
    mainBox: {
        padding:'48px 0 28px',
        maxWidth:'1056px',
        margin:'0 auto'

    },
    imageBox:{
        height:'48px',
        width:'48px',
        opacity:1,
        borderRadius:'25px'
    }

    

    })
const HomeCard = () => {
    const cardHome = useStyle();
  return (
    <Box className={cardHome.mainBox}>
        <Stack direction='row' spacing={4}> 
         <Typography variant='h6' mx={2} component='div' fontWeight={600}>
            Bahria Housing Porject
         </Typography>
         <Button variant="outlined" size='small' >
            Explore All
         </Button>
        </Stack>

           {/* card section */}
           <Stack direction='row' spacing={2} mt={2} p={2}>
            <Paper >
                <Box  p={2} >
                    {/* image section */}
                    <Box className={cardHome.imageBox} mb={2}>
                       <CardMedia 
                                component="img"
                                image={payRent}
                                height='100%'
                                
                            />
                    </Box>

                      <Typography variant='body1' component='div' >
                          PayRent
                      </Typography>             
                </Box>
            </Paper>

            <Paper >
                <Box  p={2} >
                    {/* image section */}
                    <Box className={cardHome.imageBox} mb={2}>
                       <CardMedia 
                                component="img"
                                image={payRent}
                                height='100%'
                                
                            />
                    </Box>

                      <Typography variant='body1' component='div' >
                          PayRent
                      </Typography>             
                </Box>
            </Paper>
            <Paper >
                <Box  p={2} >
                    {/* image section */}
                    <Box className={cardHome.imageBox} mb={2}>
                       <CardMedia 
                                component="img"
                                image={payRent}
                                height='100%'
                                
                            />
                    </Box>

                      <Typography variant='body1' component='div' >
                          PayRent
                      </Typography>             
                </Box>
            </Paper>
            <Paper >
                <Box  p={2} >
                    {/* image section */}
                    <Box className={cardHome.imageBox} mb={2}>
                       <CardMedia 
                                component="img"
                                image={payRent}
                                height='100%'
                                
                            />
                    </Box>

                      <Typography variant='body1' component='div' >
                          PayRent
                      </Typography>             
                </Box>
            </Paper>
            <Paper >
                <Box  p={2} >
                    {/* image section */}
                    <Box className={cardHome.imageBox} mb={2}>
                       <CardMedia 
                                component="img"
                                image={payRent}
                                height='100%'
                                
                            />
                    </Box>

                      <Typography variant='body1' component='div' >
                          PayRent
                      </Typography>             
                </Box>
            </Paper>

           
            
            

           </Stack>

           
       
    </Box>
  )
}

export default HomeCard