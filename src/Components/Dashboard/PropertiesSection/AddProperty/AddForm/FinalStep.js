
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Grid, TextField, Typography } from '@mui/material'
import MuiPhoneNumber from 'material-ui-phone-number';

const FinalStep = () => {
  return (
   <Box  mt={0} width='100%'>
    <Typography  mx={1} variant='body1' component='div'>
       Incline towards the ending process
    </Typography>
    <Grid container component='main' mt={2}>
        <Grid item xs={12} sm={6} md={6} p={1}>
         <TextField
         label="Area" variant="outlined"
         type='text'
         required
         fullWidth
         />

       
        </Grid>
        <Grid item xs={12} sm={6} md={6} p={1}>
         <TextField
         label="Price" variant="outlined"
         type='number'
         required
         fullWidth
         />

        </Grid>
        <Grid item xs={12} sm={6} md={6} p={1}>
        <MuiPhoneNumber
             
              id="contactPhoneNumber"
              defaultCountry={"pk"}
              style={{ width: "100%" }}
              label="Primary Number"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name='phone'
              autoComplete="phone-number"
            
              // onChange={(e) => setPhone(e.target.value)}
          
            />
        </Grid>
        <Grid item xs={12} sm={6} md={6} p={1}>
        <MuiPhoneNumber
             
              id="contactPhoneNumber"
              defaultCountry={"pk"}
              style={{ width: "100%" }}
              label="WhatsApp Number"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              name='phone'
              autoComplete="phone-number"
            
              // onChange={(e) => setPhone(e.target.value)}
          
            />
        </Grid>
        <Grid item xs={12} sm={6} md={6} p={1}>
         <TextField
         label="Property Address" variant="outlined"
         type='text'
         required
         fullWidth
         />

        </Grid>
        <Grid item xs={12} sm={6} md={6} p={1}>
        <TextField
         label="Property Name/Title" variant="outlined"
         type='text'
         required
         fullWidth
                 />

        </Grid>

        <Grid item xs={12} sm={12} md={12} p={1}>
        <TextField
        placeholder="Write Your Property Description"
        multiline
        rows={3}
        maxRows={4}
        style ={{ width:'100%',}}
        size="small"
         fullWidth
                 />

        </Grid>

    </Grid>

   

   </Box>
  )
}

export default FinalStep