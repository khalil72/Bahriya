import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import homeBanner from '../../Assets/Images/homebanner.jpg'
import { makeStyles } from '@material-ui/styles';

import useCollapse from 'react-collapsed';
import ServicesForm from '../Form/ServicesForm';



const useStyle = makeStyles({
    buttonStyle:{
      position:'relative',
      top:'-100px',
      left:'30px',
      
  backgroundColor:'black !important' , 
        color:'white !important' , borderRadius:'25px !important',
      "&:hover": {
        backgroundColor: "none",
     }
    },
})


const HomeBanner = () => {
    const button = useStyle();
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
  
 
  return (
    <Box sx={{background: 'rgb(247, 247, 247)' , height:'250px'}}  mt={0} >
        <Grid container p={0}>
            <Grid lg={6} sm={12} p={4} pt={0} mt={4} mb={0}>
                    <Typography variant='h4' fontWeight={600}>
                    Lets Find the right project option for you
                </Typography>
                <Typography>
                    Get Some Project Value and see selling option
                </Typography>

                
          
               
            </Grid>
            <Grid lg={6} sm={12} pb={0}>
                <Box sx={{height:'250px'}}>
                  <img src={homeBanner} alt='' style={{width:'100%' , height:'100%'}}/>

                </Box>
            </Grid>
        </Grid>
     
        <Button className={button.buttonStyle}  {...getToggleProps()} >
            {isExpanded ? 'Services' : 'Services' }
                </Button>
                <div {...getCollapseProps()}>
            <div>
                <ServicesForm />
            </div>
        </div>
                     

  
                

    </Box>
  )
}

export default HomeBanner