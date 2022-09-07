import { Box, Card, CardMedia, Grid,  Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import PropertyData from '../../../Assets/Data/PropertyData';

const FeatureProperty = () => {
   //slider
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    initialSlide: 0,
    autoplay:'true',
     arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Box sx={{p:5 , my:0}}>
      <Box  sx={{background:'rgb(255, 255, 255) !important',
                  boxShadow:'rgb(0 0 0 / 8%) 0px 1px 2px !important' }} p={1}>
          <Box p={2}>
            <Typography sx={{color:'rgb(153, 153, 153)'}}>Featured Properties</Typography>
            <Box mt={1} style={{borderRadius: '8px',
    background:'rgb(255, 255, 255)'}}>
             <Slider {...settings}>
              {PropertyData.map((item)=>(
                <Link to='/'>
                <Card style={{borderRadius: '8px',
    background:'rgb(255, 255, 255)'}}>
                 
                  <Grid container p={1}>
                    <Grid lg={4} sm={12} >
                      <CardMedia  
                      component='img'
                      image={item.image}
                      alt='/'
                      height='100px'
                      sx={{ borderRadius:'20px'}}

                      />
                    </Grid>
                   <Grid lg={8} sm={12}>
                   <Typography mx={2} variant='body1' component ='div' fontWeight={600}>
                    {item.price}
                    </Typography>
                    <Typography mx={2} variant='h6' component ='div' fontWeight={700}>
                    {item.title}
                    </Typography>

                    <Typography mx={2} variant='body2' noWrap>
                      {item.location}
                    </Typography>

                   </Grid>

                  </Grid>
                  
                 
                </Card>
                </Link>
              ))}
              

             </Slider>
             </Box>

            
          </Box>
      </Box>

    </Box>
  )
}

export default FeatureProperty