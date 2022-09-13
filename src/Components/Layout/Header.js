import React ,{useState , useEffect}from 'react'
import { AppBar,         Toolbar, Typography  } from '@mui/material'
import { Box, Container } from '@mui/system'
import Property051 from '../../Assets/Images/bahriahousinglogo.png'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AppDrawer from './AppDrawer';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';

const useStyle = makeStyles({
  Link: {
    textDecoration: 'none',
    color:' black !important',
    padding: '0px 8px ',
    marginTop:'8px'
    
  },
  
  AppBar:{
    backgroundColor:'white !important',
    borderBottom: '1px solid rgb(200, 200, 200)',
    fontSize: '14px',
    boxShadow:'none !important',
    color:'black'

  },

  })

  function ElevationScroll(props) {
    const { children, window } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };



const Header = (props) => {
  const useClasses= useStyle();
  return (
    <Box sx={{ flexGrow: 2 }} >
        <CssBaseline />
        <ElevationScroll {...props}>
        <AppBar   className={useClasses.AppBar}>
      <Container maxWidth='xl'>
        <Toolbar  disableGutters >
        <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              
              display: { xs: 'flex' ,md:'flex' },
              flexGrow: 0,
             
              
              color: 'black',
              textDecoration: 'none',
              mr: 0,
              mt:2
            }}
          >
            <Link to='/home'> <img src={Property051}  height='37px' alt=''  />
             </Link> 
          </Typography> 

           <Box sx={{ flexGrow: 1 }}/>
           <Box sx={{flexGrow: 0,  flexFlow: 'row-wrap',
            justifyContent: 'space-between', 
                 display:{ xs: 'none', md: 'flex' , sm:'block' }}} >
                   <Link to='#'   className={useClasses.Link}>
                    <span><PhoneIphoneIcon /> </span>
                    <span style={{position: 'relative',
    top: '-8px',
    right:'5px'}}>DownloadApp</span>
                   {/* <Chip icon={<PhoneIphoneIcon />} label="DownloadApp" sx={{backgroundColor:'white !important' ,
                height:'0px important'
                  }}/> */}

                  </Link>
                  <Link to= '/news' className={useClasses.Link} >
                    
                    News

                  </Link>
                  <Link to='/listingProperty'   className={useClasses.Link}>
                    Listing Property
                  </Link>
                  <AppDrawer />
                  {/* <Link to='/login' className={useClasses.Link}>
                  Login
                </Link>  
                  */}

                {/* <Link to='/project' className={useClasses.Link}>
                  Project
                </Link> 
                <Link to='/login' className={useClasses.Link}>
                  Login
                </Link>  
                <Link to='/signup' className={useClasses.Link}>
                  SignUp
                </Link>   */}
           </Box> 
        </Toolbar>
     
          
           

      </Container>
      
    </AppBar>
    </ElevationScroll>
    </Box>
     
    
   
  )
}

export default Header