import React , {useState} from 'react'
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import {  Grid,  Drawer, IconButton, Divider } from '@mui/material';
import profile  from '../../Assets/Images/profile2.webp'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ActivityCard from './DrawerComponent/ActivityCard';
import QuickLinks from './DrawerComponent/QuickLinks';
import AppStore from './DrawerComponent/AppStore';
const useStyle = makeStyles({
  BoxDrawer:{
    backgroundColor:'rgb(242, 243, 248)',
    justifyContent: 'space-between',
    borderRadius:'25px',
    padding: '36px 22px 23px 16px',
   

  
  }

  })

const AppDrawer = () => {
  const useClasses = useStyle();
  const[isDrawerOpen , setIsDrawerOpen]= useState(false);

  
  
  return (
    <Box>
         <Box>
         <IconButton onClick={() => setIsDrawerOpen(true)} style={{borderRadius:'25px', backgroundColor:'white' , 
         boxShadow:'0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'}}>
             
                <MenuIcon  size="small" edge='start'/>
                <AccountCircleIcon size="small" edge='start' sx={{marginLeft:'5px'}}/>

              
          </IconButton>

         <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} 
         PaperProps={{

          sx: {
            width: 300
          }
        }}
         >
          
          <Box className={useClasses.BoxDrawer}>
         <Grid container>
             <Grid lg={6} sm={12}>
             <img src={profile} alt='/'  style={{width:'64px' , height:'64px'}}/>

           </Grid>
  
             <Grid lg={6} sm={12}>
              
                    <Button href='/login'  sx={{backgroundColor:'black' , color:'white' , marginTop:'10px'
                  , "&:hover": {
                      boxShadow: '0 0em 0em 0 rgb(0 0 0 / 20%)',
                    backgroundColor: '#e8e8e8',
                      borderColor: 'transparent',
                      color: '#333333!important'
                    }
                  }}>
                        Login
                </Button>
               
            </Grid>
           </Grid>
           <Divider />

           <ActivityCard />
          </Box>
          {/* component */}
          <QuickLinks />
          <AppStore />

         
          
      
          
         
    
    </Drawer>
      {/* {[ 'user'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))} */}
    </Box>
    </Box>
  )
}

export default AppDrawer