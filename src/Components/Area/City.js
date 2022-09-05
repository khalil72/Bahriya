import { Box ,  Card,  CardMedia,  Typography  } from '@mui/material'
import React from 'react'
import CityData from '../../Assets/Data/CityData'
import Slider from "react-slick";
import { Stack } from '@mui/system';



const City = () => {
    var settings = {
        className: "slider variable-width",
        centerMode: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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
    <Box pt={3} p={3}  mt={3}>
         <Typography variant='h5' component='div' fontWeight={600}>
        Our Cities Collection
         </Typography>
        <Typography variant='subtitle2' color='#747474'>
            Most sought-after projects in Thane
        </Typography>
         <Box mt={2}>
         <Slider {...settings}>
          
            {CityData.map((item)=> (
                  <Stack direction='row' spacing={2}>
                    <Card style={{width:'90%' ,backgroundColor:'none !important' ,
              boxShadow:'none'
            }} spacing={4}>
                <CardMedia component='img'
                  image={item.city_image}
                  height='200px'
                />
                
                
                        
                    </Card>
                
               
                    
               
                    
               

                     </Stack>
                 
              

            ))}
           
         </Slider> 
         </Box>
          



        
    </Box>
  )
}

export default City