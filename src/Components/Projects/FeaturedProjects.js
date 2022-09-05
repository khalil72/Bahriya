import { Box, Card, Grid, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ListingData from '../../Assets/Data/ListingData'
import { makeStyles } from '@material-ui/styles'
import CityTab from '../Tabs/CityTab';

const textStyle = makeStyles({
    heading: {
     fontSize:'16px  !important',
     lineHeight:'19px  !important',
     color:'#000  !important',
     overflow:'hidden  !important',
     textOverflow:'ellipse  !important'
  
      
    },
    subheading: {
      fontSize:'12px !important',
      fontWeight:'400  !important',
      color: '#383838  !important',
      lineHeight:'14px  !important',
      position:'relative  !important',
      overflow:'hidden  !important',
      textOverflow:'ellipse  !important',
      whiteSpace: 'nowrap  !important'
  
    },
    location:{
      fontSize:'12px  !important',
      fontWeight:'400  !important',
      color: '#9b9b9b  !important',
      lineHeight:'14px  !important',
      position:'relative  !important',
      overflow:'hidden  !important',
      textOverflow:'ellipse !important',
      
    },
    price:
    {
      fontSize: '16px !important',
      lineHeight: '18px !important',
      fontWeight: '700 !important',
  
     }, 
     projectCard:{
        border: '1px solid rgb(229, 229, 229)',
        boxShadow:'none !important',
       
        "&:hover":{boxShadow:'rgb(0 0 0 / 15%) 0px 6px 12px 0px !important' ,
         cursor:'pointer'
    }
     }
  });
  

const FeaturedProjects = () => {
    const projectStyle= textStyle();
  return (
    <Box pt={3} p={3}  mt={5}>
          <Typography variant='h5' component='div' fontWeight={600}>
        Featured Projects
         </Typography>
      <Typography variant='subtitle2' color='#747474'>
        Exclusive showcase of top projects
      </Typography>
      <CityTab />
        <Grid  container  spacing={2} mt={1} >
           
             {ListingData.map((item)=>(
                <Grid lg={4} sm={12} p={2}>

                 <Card className={projectStyle.projectCard}>
                    <CardMedia
                    component='img'
                    image={item.image01}
                    height='200px'
                  
                    
                    /> 
                    
                     <Box mx={2} mt={1} mb={1}>
                    <Typography  className={projectStyle.heading} fontWeight={700}  >
                    {item.title}
                     </Typography> 
                     <Typography  className={projectStyle.subheading} fontWeight={700}  >
                    {item.developer}
                     </Typography> 

                     <Typography className={projectStyle.subheading} component='div' mt={1}>
                      {item.size}
                     </Typography>
                     <Typography className={projectStyle.location} component='div'>
                      {item.address}
                     </Typography>

                     <Typography className={projectStyle.price} component='div' mt={2}>
                      {item.price}
                     </Typography>
                   
                    
                    
                    </Box>
                 </Card>
              
 
                 </Grid>

               ))}
            
           
        </Grid>
       

    </Box>
  )
}

export default FeaturedProjects