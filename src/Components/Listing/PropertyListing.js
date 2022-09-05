import { Box ,Card,CardMedia,Typography ,Button } from '@mui/material'

import React, { useEffect, useState } from 'react'
import PropertyData from '../../Assets/Data/PropertyData'
import Slider from 'react-slick'
import { Stack } from '@mui/system'
import { makeStyles } from '@material-ui/styles';
import CityTab from '../Tabs/CityTab'
import CityData from '../../Assets/Data/CityData'


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

   }
})


const PropertyListing = () => {
  const text = textStyle();

  // city get data
 


 

  //slider
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:4,
    initialSlide: 0,
    autoplay:'true',
    
            arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
    <Box pt={0} p={3}  > 
         
         <Typography variant='h5' component='div' fontWeight={600}>
        Recently Added
      </Typography>
      <Typography variant='subtitle2' color='#747474'>
  Based on preferences of users like you
      </Typography>
      <CityTab />

    
      <Slider {...settings}>
      
           {PropertyData.map((item)=> (
            <Stack direction='row' spacing={4} mt={2}>
              <Card style={{width:'90%' ,backgroundColor:'none !important' ,
              boxShadow:'none'
            }} spacing={4}>

                     <CardMedia component='img'
                      image={item.image}
                      alt='/'
                      height='200px'
                      sx={{ borderRadius:'20px'}}
              
                       />

                       
                    <Box mx={2} mt={1} mb={0}>
                    <Typography  className={text.heading} fontWeight={700}  >
                    {item.title}
                     </Typography>  
                     <Typography className={text.subheading} component='div' mt={1}>
                      {item.size}
                     </Typography>
                     <Typography className={text.location} component='div'>
                      {item.location}
                     </Typography>

                     <Typography className={text.price} component='div' mt={2}>
                      {item.price}
                     </Typography>
                   
                     <Box mt={2}>
                     <Button variant="contained" size='small' sx={{backgroundColor:'#e8e8e8' , borderColor:'transparent'
                    ,color:'#707070', "&:hover": {
                      backgroundColor: "black !important",
                      color:'white'
                   }
                    }} >
                      Contact

                     </Button>
                     </Box>
                    
                    </Box>
            </Card>
            </Stack>
            
           ))}
      </Slider>     

       

    </Box>
  )
}

export default PropertyListing