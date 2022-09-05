import { Box, Card,    CardActionArea,    Typography,CardContent} from '@mui/material'
import Slider from "react-slick";
import React from 'react'
import BlogsData from '../../Assets/Data/BlogsData';
import { Link } from 'react-router-dom'





const Blogs = () => {

    var settings = {
        className: "slider variable-width",
        centerMode: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
    <Box  mt={3} p={3} mb={0}>
     <Typography variant='h5' component='div' fontWeight={600}>
        Blogs and Articles
         </Typography>
        <Typography variant='subtitle2' color='#747474'>
          Read what's happening in Real Estate
        </Typography>
       
        <Slider {...settings}>
          
          
            {BlogsData.map((item)=>(
                  
             <Card sx={{ boxShadow:'none' , marginTop:'15px' , 
             "&:hover": {
                backgroundColor:'white',
                transition: 'none'
               
              
             }}} p={2}  >
            
                <Box sx={{width:'94%' , height:'100%'}}>
                  <img src={item.image01} alt="/" style={{width:'100%' , height:'250px' , objectFit:'cover'}} />
                  </Box>
                  <CardContent sx={{height:'50%'}}>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold'}} >
                        Our Solutions
                        </Typography>
                        <Typography variant="body2" mt={2} mb={3}>
                           Learn how PropTrack provides solutions at each stage of a property lifecycle, from customer acquisition, valuation ordering, digital assessment and portfolio management.
                        </Typography>
                        <Link to='/'  >
                            <Typography sx={{color:'red' , textDecoration:'none'}}  variant="body2" >
                            Learn More
                            </Typography>
                       
                      </Link>
                       
                    </CardContent>
              
                
         
        
              

                    

                          
                        </Card>
                  
                

                ))}
              
        </Slider>   


    </Box>
  )
}

export default Blogs