import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import { Divider, Grid, Link } from '@mui/material';
import profile  from '../../Assets/Images/profile2.webp'
const useStyle = makeStyles({
  BoxDrawer:{
    backgroundColor:'rgb(242, 243, 248)',
    justifyContent: 'space-between',
    borderRadius:'25px',
    padding: '36px 22px 23px 16px'

  
  }

  })

const AppDrawer = () => {
  const useClasses = useStyle();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
         <Box className={useClasses.BoxDrawer}>
          <Grid container>
            <Grid lg={6} sm={12}>
              <img src={profile} alt='/'  style={{width:'64px' , height:'64px'}}/>

            </Grid>
  
            <Grid lg={6} sm={12}>
              <Link to='/login'>
                <Button component='div' size='large'  variant="contained"  sx={{backgroundColor:'black' , color:'white' , marginTop:'10px'
              , "&:hover": {
                boxShadow: '0 0em 0em 0 rgb(0 0 0 / 20%)',
                backgroundColor: '#e8e8e8',
                borderColor: 'transparent',
                color: '#333333!important'
              }
              }}>
                    Login
                </Button>
              </Link>
            </Grid>
          </Grid>

          <Divider />
         </Box>
        
         
        </Box>
      );
  return (
    <div>
         <div>
      {[ 'right'].map((anchor) => (
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
      ))}
    </div>
    </div>
  )
}

export default AppDrawer