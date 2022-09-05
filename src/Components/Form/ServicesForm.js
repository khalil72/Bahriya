import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import Select from '@mui/material/Select';

const textStyle = makeStyles({
 formBox:{
  backgroundColor:'#E6E7E8',
 position:'relative',
  zIndex:'300',
  top:'-85px',
  padding:'20px'
  
 }
})

const ServicesForm = () => {
  const boxForm=  textStyle('');


  return (
    <Box   className={boxForm.formBox}> 
      <Grid container spacing={0} >
        <Grid lg={6} sm={12} >
          <Box py={3} px={4}>
          <Typography variant='h6' color='black' fontWeight={600}>
            Let Us
          </Typography>
          <Typography variant='h6' color='black' fontWeight={600}>
             Provide You 
          </Typography>
          <Typography variant='h5' color='black' fontWeight={700} >
            BEST SERVICES
          </Typography>
          <Typography variant='body2' mt={1}>
            This Lorem Ipsum generator fits all your Lipsum needs! Come on over, make some Lipsum and copy-paste like a pro!
          </Typography>
          </Box>
          

        </Grid>

        <Grid lg={6}  sm={12} >
          <Card mt={2} p={5}>
            <CardContent mt={2}>
            <from>
            <TextField id="" label="Name" size="small" style ={{width: '100%'}}/>
            <TextField id="" label="Email" size="small" type="email" name='email'   style ={{ width:'49%', marginTop:'20px'}} />
            <TextField id="" label="Contact Number" size="small" type="number" name='phone'   style ={{width:'50%' , marginTop:'20px' , marginLeft:'5px'}}/>
            <TextField
                placeholder="Contact us if you need any assistance or have any query related to Real Estate."
                multiline
                rows={3}
                maxRows={4}
                style ={{ width:'100%', marginTop:'20px'}}
                size="small"
                 />
          
            <FormControl fullWidth style={{ width:'70%', marginTop:'20px'}}>
        <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          size="small"
        >
          <MenuItem value={10}>PropertyManagement</MenuItem>
          <MenuItem value={20}>Buy</MenuItem>
          <MenuItem value={30}>Rent</MenuItem>
          <MenuItem value={30}>Others</MenuItem>
        </Select>
      </FormControl>
           <Button type='submit' variant="contained" size='small' 
            sx={{backgroundColor:'black' , color:'white' , width:'20%' ,marginTop:'20px' , marginLeft:'40px'
            ,  padding:'9px ' , 
            "&:hover": {
              boxShadow: '0 0em 0em 0 rgb(0 0 0 / 20%)',
              backgroundColor: '#e8e8e8',
              borderColor: 'transparent',
              color: '#333333!important',
             
            }
            }}
          >
             Submit
           </Button>



              

            </from>

            <Typography variant='body2' fontWeight={600} color='black' mt={2}>
            We are avaialble 24/7 to Assist You in Choosing the Best investment and Managment Opportunities
            </Typography>
            </CardContent>
          

          </Card>

        </Grid>

      </Grid>

    </Box>
  )
}

export default ServicesForm