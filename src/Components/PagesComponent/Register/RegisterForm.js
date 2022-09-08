
import React, { useState } from 'react'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MuiPhoneNumber from 'material-ui-phone-number';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const[phone, setPhone] = useState(null);
  const [email , setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(phone,email,password);

  // }
 


  return (
    <Box  sx={{my:1, mx:4 ,display:'flex' , flexDirection:'column',
    alignItems:'center'
    }}>

        <Avatar sx={{m:1 , bgColor:'secondary.main'}}>
          <LockOpenIcon />
        </Avatar> 
        <Typography component="h1" variant="h5">
              Sign Up
        </Typography>

        <Box component='form' validate   sx={{mt:2}}>

           <MuiPhoneNumber
             
              id="contactPhoneNumber"
              defaultCountry={"pk"}
              style={{ width: "100%" }}
              label="Contact Number"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name='phone'
              autoComplete="phone-number"
            
              // onChange={(e) => setPhone(e.target.value)}
          
            />
              <TextField  
             margin="normal"
             required
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             autoComplete="email"
             autoFocus
            //  onChange={(e) => setEmail(e.target.value)}
            
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
                // onChange={(e) => setPassword(e.target.value)}
            
              />
               <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />} 
                            label="Show Password"
                            >
                                
                            </FormControlLabel>

                            <Button type='submit'  fullWidth variant='contained' sx={{mt:2, 
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
        

       

            

          <Box mt={2} mb={0}>
         <Link to='/login' >
                Already have an Account? Sign in
         </Link>
            </Box>        

    </Box>
  )
}

export default RegisterForm