import React from 'react'
import { Box  ,Button,Card,Stack, Typography} from '@mui/material'
import Apartment from '../../../../../Assets/Images/apartments.png'
import Home from '../../../../../Assets/Images/home.png'
import Location from '../../../../../Assets/Images/location.png'
import Commercial from '../../../../../Assets/Images/commercial.png'

const data= [
    {
        id:1,
        name:'Aparment',
        description:'Flats or Apartments, Anexy, Pent House',
        image:Apartment,

    },
    {
        id:2,
        name:'Home',
        description:'House, Portion, Farm House, etc',
        image:Home,
    },
    {
        id:3,
        name:'Plots/Land',
        description:'Plots, Plot Files, Agriculture Land etc',
        image:Location,
    },
    {
      
        id:4,
        name:'Commercial',
        description:'Shop, Office, Plaza, Factory etc',
        image:Commercial,

    }

]
const CardStep = () => {
  return (
    <Box mt={0} width='100%'>
        <Typography  mx={1} variant='body1' component='div' >
            Select The Type of Property you want to List on Bahria Housing 
        </Typography>
        <Stack  direction={{ xs: 'column', sm: 'row' }}  mt={2} mx={1} spacing={{ xs: 1, sm: 2, md: 1 }}>
            {data.map((item,index)=>(
                  <Card key={index} p={2} style={{border:'1px solid black' ,borderRadius:'15px'}}>
                  <Box p={3}  >
                    <Box mx={4}  mb={1}>
                    <img src={item.image} alt=''   style={{  height:'50px' , borderRadius:'25px'}} />
                    </Box>
                    
                   
                    <Typography variant='body' fontWeight={600} component='div'>
                        {item.name}

                    </Typography>
                    <Typography variant='body2'   component='div' mt={1}>
                        {item.description}

                    </Typography>
                    <Box mt={2} mb={0}>
                    <Button size='small' variant='contained' style={{fontSize:'11px' , backgroundColor:'black'}}>
                        List Property
                    </Button>

                    </Box>
                    
  
  
                  </Box>
              </Card>

            ))}
          

        </Stack>
       
        
    </Box>
  )
}

export default CardStep