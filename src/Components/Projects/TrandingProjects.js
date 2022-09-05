import { Box, Card,  CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import TrendingProject from '../../Assets/Data/TrandingProject';
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
      height:'150px !important',
      width:'95% !important',
     
      "&:hover":{boxShadow:'rgb(0 0 0 / 15%) 0px 6px 12px 0px !important' ,
       cursor:'pointer'
  }
   }
});

const TrandingProjects = () => {
  const projectStyle= textStyle();


  const settings = {
    
    centerMode: false,
    // className: "center",
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    dots: true
  };

  return (
    <Box pt={3} p={3}  mt={3}>
      <Typography variant='h5' component='div' fontWeight={600}>
        Trending Projects
         </Typography>
        <Typography variant='subtitle2' color='#747474'>
            Most sought-after projects in Thane
        </Typography>
        <CityTab />
        <Box mt={3} >
          
        <Slider {...settings} >
          {TrendingProject.map((item)=> (
            <Card   className={projectStyle.projectCard}>
            <Grid container  spacing={0}>
              <Grid lg={6} >
                <CardMedia component='img' 
                image={item.image01}
                height="150px"
                />
              </Grid>
              <Grid lg={6} p={2}>
              <Box mx={0} mt={0} mb={0}>
                    <Typography className={projectStyle.heading} fontWeight={700}  >
                    {item.title}
                     </Typography> 
                     <Typography className={projectStyle.subheading}    >
                    {item.developer}
                     </Typography> 

                     <Typography className={projectStyle.subheading} component='div' mt={1}>
                      {item.size}
                     </Typography>
                     <Typography className={projectStyle.location} component='div'>
                      {item.address}
                     </Typography>

                     <Typography  component='div' mt={2}>
                      {item.price}
                     </Typography>
                   
                    
                    
                    </Box>
              </Grid>

              
            </Grid>
           
             
                
           
          
           
           

          </Card>

          ))}
            
         </Slider>
        </Box>
       


    </Box>
  )
}

export default TrandingProjects