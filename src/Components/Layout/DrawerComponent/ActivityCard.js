
import React from 'react'
import { Box, Card, Grid, List, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const data = [
    {
      id:'1',
      name:'Properties',
      icon:(<HomeIcon />)
   },
   {
    id:'2',
    name:'Projects',
    icon:(<HomeIcon />)
   },
   {
    id:'3',
    name:'Saved',
    icon:(<FavoriteBorderIcon />)
   },
   {
    id:'4',
    name:'RecentSearch',
    icon:(<HomeIcon />)
   },


]

const ActivityCard = () => {
    
  return (
    <Box mt={1}>
        <Typography variant='h6' component='div' fontWeight={600}>
            My Activity

        </Typography>
        <Grid container  p={0} sx={{ flexDirection: { xs: "column", md: "row"} }}>
           
                {data.map((item )=> (
                     <Grid lg={6} sm={12} p={1}>
                      <Card sx={{p:2}} >
                     <Typography mx={2}>
                       {item.icon}
                     </Typography> 
                      <Typography  component='div' textAlign='center' sx={{fontSize:'12px'}}>
                      {item.name}
                      </Typography>

                      </Card>
                      </Grid>

                ))}
              

           

        </Grid>
        

    
    </Box>
  )
}

export default ActivityCard