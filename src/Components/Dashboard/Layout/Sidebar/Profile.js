
import React from 'react'
import { Box, Typography } from '@mui/material'
import  profile from '../../../../Assets/Images/profile.webp'
import { makeStyles } from '@material-ui/styles';
const useStyle = makeStyles(
    {
        img:{
            height:'87px',
            width:'87px',
            objectFit:'cover',
         
            borderRadius:'25px',
          
        }

    }
)

const Profile = () => {
    const profileStyle = useStyle()
  return (
    <Box p={2} >
        <Box sx={{
            display:'flex',
    justifyContent:"center",
    alignItems:"center" , mb:1}}>
        <img  src={profile}  alt='/' className={profileStyle.img} />
        </Box>
       <Typography variant='h6' fontWeight={700} textAlign='center'>
        Khalil Ahmed

       </Typography>
      <Typography variant ='body2' component='div'  textAlign='center'>
        email@gmail.com
      </Typography>

    </Box>
  )
}

export default Profile