import React from 'react'
import { Box, Card, Grid, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <Box mt={1}  >
        
        <Accordion sx={{boxShadow:'none !important'}}>
        <AccordionSummary  
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Quick Link</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container p={0} m={0}>
                <Grid lg={6} sm={12} p={1}>
                    
                    <Link to='/home'>
                        <Card sx={{p:2}}>
                            <HomeIcon  edge='center' style={{marginLeft:'17px'}} />

                           <Typography component='div'  sx={{fontSize:'12px' , marginLeft:'15px'}}  >
                              Home  
                           </Typography>
                        </Card>

                    </Link>
                </Grid>
                <Grid lg={6} sm={12} p={1}>
                    
                    <Link to='/listingProperty'>
                        <Card sx={{p:2}}>
                            <ApartmentIcon  edge='center' style={{marginLeft:'15px'}} />

                           <Typography component='div' textAlign='center' sx={{fontSize:'12px'}}  >
                           ListingProperty 
                           </Typography>
                        </Card>

                    </Link>
                </Grid>
                <Grid lg={6} sm={12} p={1}>
                    
                    <Link to='/project'>
                        <Card sx={{p:2}}>
                            <ApartmentIcon  edge='center' style={{marginLeft:'17px'}} />

                           <Typography component='div'  sx={{fontSize:'12px' }}  >
                           Our Projects
                           </Typography>
                        </Card>

                    </Link>
                </Grid>
                <Grid lg={6} sm={12} p={1}>
                    
                    <Link to='/blogs'>
                        <Card sx={{p:2}}>
                            <BookIcon  edge='center' style={{marginLeft:'17px'}} />

                           <Typography textAlign='center' component='div'  sx={{fontSize:'12px' }}  >
                           Our Blogs
                           </Typography>
                        </Card>

                    </Link>
                </Grid>

            </Grid>
          
        </AccordionDetails>
      </Accordion>
        

    </Box>
  )
}

export default QuickLinks