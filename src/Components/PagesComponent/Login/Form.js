
import React from 'react'
import { Avatar, Box, Button,  Grid,  TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link ,  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BASE_URL } from '../../../Utils/Constant';
import axios from 'axios';
import { ErrorHandler } from '../../../Utils/ErrorHandler';
import { toast } from '../../../Utils/Toast';



const Form = () => {
    const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
   


    const onSubmit =  async(e) => {
        e.preventDefault();
        // console.log(email,password);
        setEmail('');
        setPassword('');

        const userData ={
            email:email,
            password:password
        }

      axios.post(`${BASE_URL}login` , userData)
      .then((response) => {
        const data= response.data;
        if(data.status){
             navigate('/login');
        }
        else{
            navigate('/dashboard');
        }
      })
      .catch((error)=>{
        // alert('error')
        
        if(error.response){
            // const data = error.message;
            

             const data = error.response.data?.data;
            // console.log('error?.response');
            // toast(data,"error");
            
            ErrorHandler(data);
            

            console.log(error?.response);
            console.log("server responded");
        }else if (error.request) {
            console.log("network error");
          
            ErrorHandler(error.response);
          } else {
            console.log(error);
          }
      });
    }
  return (
    <Box sx={{my:3, mx:4 ,display:'flex' , flexDirection:'column',
    alignItems:'center'
    }}>
        <Avatar sx={{m:1 , bgColor:'secondary.main'}}>
        <LockOutlinedIcon />

        </Avatar>
        <Typography component="h1" variant="h5">
              Sign in
        </Typography>

        <Box component='form' validate onSubmit={onSubmit}  sx={{mt:2}}>
            <TextField  
             margin="normal"
             required
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             autoComplete="email"
             autoFocus
             size="large"
             onChange={(e) => setEmail(e.target.value)}
             value={email}
          

            
            />
             <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

            
               
               <Grid container>
                        <Grid item xs>
                                <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />} 
                            label="Show Password"
                            >
                                
                            </FormControlLabel>
                            
                        </Grid>

                        <Grid item mt={1}>
                            <a href='/' >
                                Forgot Password
                            </a>
                        </Grid>
                </Grid>  

                <Button type='submit'  fullWidth variant='contained' sx={{mt:3,
                    backgroundColor:'black' , color:'white' , marginTop:'10px'
                    , "&:hover": {
                        boxShadow: '0 0em 0em 0 rgb(0 0 0 / 20%)',
                        backgroundColor: '#e8e8e8',
                        borderColor: 'transparent',
                        color: '#333333!important'
                        }
                    
                    
                    }}>
                        
                   Submit
                 </Button>
        </Box>
        <Box mt={2} mb={4} mx={1}>
            <Button variant='outlined'  startIcon={<GoogleIcon />} fullWidth>
            Continue with Google
        </Button>
        <Button  fullWidth
                variant="contained" startIcon={<FacebookIcon />} sx={{mt:2}}>
            Continue with Facebook
        </Button>

            

        </Box>
        <Link to='/signup' >
                Signup / Create Your Account
            </Link>

        
      



    </Box>
  )
}

export default Form