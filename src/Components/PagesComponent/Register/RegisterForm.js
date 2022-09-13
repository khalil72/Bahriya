
import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MuiPhoneNumber from 'material-ui-phone-number';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

import axios from 'axios';

import { Link,  useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../Utils/Constant';
// import { toast } from '../../../Utils/Toast';
import { ErrorHandler } from '../../../Utils/ErrorHandler';



const RegisterForm = () => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handlePhone = (value, countrydata) => {
      setPhoneError(false);
      setPhone(value);

  }  
  const [emailExisted,setEmailExisted]=useState(false);
  const [phoneExisted , setPhoneExisted]=useState(false);
  // const[phone, setPhone] = useState('');
  const [email , setEmail] = useState('');
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [password, setPassword] = useState('');
  const [cPassword, setConfirmPassword] = useState('');


  
  // const[snackbar,setSnackbar] = useState({
  //   error:false,
  //   severity:"error",
  //   message:""
  // })

  const [isErr, setIsErr] = useState('');

  const checkValidation =(e) => {
    setConfirmPassword(e.target.value);
    if(password !== e.target.value){
      setIsErr("Confirm password  Should be match with  password")
    }
    else{
      setIsErr("")
    }
  }

 
  const RegisterSubmit = async(e) =>
    {
     e.preventDefault();
    //  console.log(phone
    //   ,email,password , firstName , lastName ,);
      setEmail('');
      setPhone('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setConfirmPassword('');
     
      const userData ={
        email : email,
        password:password,
        c_password:cPassword,
        contact_no:phone,
        first_name:firstName,
        last_name:lastName,

      }
      
    
      axios.post(`${BASE_URL}register`, userData)
     
      .then((response) => {
      //  console.log(response);
       // console.log(response.data);
       const data = response.data;
       if(data.status){
        navigate('/login')
       }
    
      })
      .catch((error)=> {
        if (error.response) {
        const data = error.response.data?.data;
        ErrorHandler(data)

          console.log(error?.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }

      });
     

  

}

 


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

        <Box component='form' validate  onSubmit={RegisterSubmit}  sx={{mt:2}}>
          <Grid container>
            <Grid item xs={12} sm={6}>
                <TextField  
                value={firstName}
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="first_name"
                autoComplete="first_name"
                autoFocus
                sx={{}}
                onChange={(e) => setFirstName(e.target.value)}
                
                
                />

            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField  
            value={lastName}
             margin="normal"
             required
             fullWidth
             id="last_name"
             label="Last Name"
             name="last_name"
             autoComplete="last_name"
             autoFocus
             sx={{marginBottom:'20px', mx:'4px'}}
             onChange={(e) => setLastName(e.target.value)}
            />

            </Grid>
            <Grid item xs={12} sm={12}>
            <MuiPhoneNumber key="autofocus_issue_112" defaultCountry="pk" 
        fullWidth variant="outlined" label="Contact Number" name="phone" 
        value={phone}
         onChange={handlePhone} 
         autoComplete="phone-number"
         required
        

         
         />
            </Grid>
       
            <Grid item xs={12} sm={12}>
            <TextField  
             margin="normal"
             required
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             autoComplete="email"
             autoFocus
             onChange={(e) => setEmail(e.target.value)}
             value={email}
             helperText={emailExisted ? "Email already existed":""}
            error={emailExisted}
            />
         
            </Grid>
            <Grid item xs={12} sm={6}>
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
              {/* <span>{errMessage}</span> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              value={cPassword}
                margin="normal"
                required
                fullWidth
                name="c_password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="confirm-password"
                onChange={(e) => checkValidation(e)}
                sx={{ mx:'4px' ,}}
               
              
               
            
              />  

           

            </Grid>
            <Typography sx={{color:'red',}} variant='body2' component='div'>{isErr}</Typography>


            
          </Grid>
      
          

         
          
           
             
               {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />} 
                            label="Show Password"
                            >
                                
                            </FormControlLabel> */}

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