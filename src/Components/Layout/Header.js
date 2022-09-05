import React ,{useState , useEffect}from 'react'
import { AppBar,    Chip,       Toolbar, Typography  } from '@mui/material'
import { Box, Container } from '@mui/system'
import Property051 from '../../Assets/Images/Property051.png'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AppDrawer from './AppDrawer';

const useStyle = makeStyles({
  Link: {
    textDecoration: 'none',
    color:' rgb(51, 51, 51) !important',
    padding: '0px 8px ',
    marginTop:'8px'
    
  },
  AppBar:{
    backgroundColor:'white !important',
    borderBottom: '1px solid rgb(200, 200, 200)',
    fontSize: '14px',
    boxShadow:'none !important'
  },

  })





const Header = () => {

  

  const [sticky, setSticky] = useState("");
   // on render, set listener
   useEffect(() => {
    // console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

 
  const classes = `header-section d-none d-xl-block ${sticky}`;
  const useClasses= useStyle();
  return (
    <Box sx={{ flexGrow: 2 }} className={classes}>
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
             
              
              color: 'inherit',
              textDecoration: 'none',
              mr: 1
            }}
          >
            <Link to='/home'> <img src={Property051}  height='37px' alt=''  />
             </Link> 
          </Typography> 

           {/* <Box sx={{flexGrow: 1,  ml:4,
           
                 display:{ xs: 'none', md: 'flex' , sm:'block' }}}>
                <Link to='/buy' className={useClasses.Link}>
                  Buy
                </Link>
                <Link to='/rent' className={useClasses.Link}>
                  Rent
                </Link> 
                <Link to='/project' className={useClasses.Link}>
                  Project
                </Link> 
              
           </Box> */}
           {/* <Box sx={{flexGrow: 1,  flexFlow: 'row-wrap',
           
                 display:{ xs: 'none', md: 'flex' , sm:'block' }}}>
                  <Button variant="outlined" >
                  PropertyID
                  </Button>
                 
                  <Button variant='contained'  sx={{backgroundColor:'#e4002b' , color:'white',
                  ml:2
                }}>
                      AddProperty
                  </Button>
               
           </Box>  */}
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
    </Box>
     
    
   
  )
}

export default Header