import React from 'react'
import { Box,Grid,Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const LocationForm = () => {
//     const [age, setAge] = React.useState('');
//     const handleChange = (event) => {
//     setAge(event.target.value);
//   };
  return (
    <Box>
       <Typography  mx={1} variant='body1' component='div' >
             Fill up your details for Property.
       </Typography>
      <Box mt={2}>
        <Grid container component='main' >
          <Grid xs={12} sm={6} md={6} p={1}>
            <FormControl  fullWidth style={{marginBottom:'10px' , }}>
                  <InputLabel id="demo-simple-select-label">Select Your City</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select City Name"
                    required
                  >
                    <MenuItem value={10}>Islamabad</MenuItem>
                    <MenuItem value={20}>Rawalpindi</MenuItem>
                    <MenuItem value={30}>Taxila</MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid xs={12} sm={6} md={6} p={1}>
          <FormControl  fullWidth  mb={2} style={{marginBottom:'10px'}}>
        <InputLabel id="demo-simple-select-label">Select Your Sub Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select City Name"
        >
          <MenuItem value={10}>Islamabad</MenuItem>
          <MenuItem value={20}>Rawalpindi</MenuItem>
          <MenuItem value={30}>Taxila</MenuItem>
        </Select>
      </FormControl>
      
          </Grid>
          <Grid xs={12} sm={6} md={6} p={1}>
          <FormControl  fullWidth style={{marginBottom:'10px'}}>
        <InputLabel id="demo-simple-select-label">Select Your PropertySubType</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select City Name"
          required
        >
          <MenuItem value={10}>Apartment</MenuItem>
          <MenuItem value={20}>Land</MenuItem>
          <MenuItem value={30}>House</MenuItem>
        </Select>

      </FormControl>
          </Grid>

          <Grid xs={12} sm={6} md={6} p={1}>
          <FormControl fullWidth style={{marginBottom:'10px' , }}>
              <InputLabel id="demo-simple-select-label">Select Your Size</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Your Size"
                required
              >
                <MenuItem value={10}>Unit Area</MenuItem>
                <MenuItem value={20}>Sq.y</MenuItem>
                <MenuItem value={30}>Marla</MenuItem>
              </Select>
            </FormControl>
          </Grid>

        </Grid>
        
      
  
      
    
      </Box>
      


    </Box>
  )
}

export default LocationForm