import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Box } from '@mui/material';
import appStore from '../../../Assets/Images/appstore.webp'
import googlePlay from '../../../Assets/Images/Google-play.png'
import qrCode from '../../../Assets/Images/qr-code.webp'

const useStyle = makeStyles({
    BoxDrawer:{
      backgroundColor:'rgb(242, 243, 248)',
      justifyContent: 'space-between',
      borderRadius:'25px',

    
    },
    appImage:{
        height:'28px',
        objectFit:'cover'

    }
  
    })

const AppStore = () => {
    const useClasses = useStyle();
  return (
    <Box className={useClasses.BoxDrawer}>
        <Grid container sx={{ flexDirection: { xs: "column", md: "row"} }}>
            <Grid lg={8} sm={12} p={2}>
                <Typography sx={{fontSize:'13px' , color:'rgb(51, 51, 51)'}}>
                    Download Bahria App
                </Typography>
                <Box mt={1} sx={{display:'flex', flexGrow:'1'}}> 
                    <a href='/' alt=''>
                        <img src={appStore}   alt='/' className={useClasses.appImage}/>

                    </a>
                    <a href='/' alt=''>
                        <img src={googlePlay}   alt='/'  className={useClasses.appImage} />

                    </a>
                </Box>
            </Grid>
            <Grid lg={4} sm={12} p={2}>
                <img src={qrCode} alt='/'  style={{width:'100%'}}/>
            </Grid>


        </Grid>
        
    </Box>
  )
}

export default AppStore