import React from 'react'
import {
  
  Box,
} from "@mui/material";
import SelectOption from './SelectOption';
import SearchForm from './SearchForm';



const Searchbar = () => {
  return (
    <>
       <Box sx={{display: "flex" , backgroundColor:'#fff' ,borderRadius:'100px'}} >
        <Box sx={{flexGrow:0  , lineHeight:'50px' ,}}>
          <SelectOption />
         
              
        </Box>
        {/* <Divider orientation="vertical" flexItem /> */}
        <Box sx={{flexGrow:2}}>
          <SearchForm />
        </Box>

       </Box>

     
      
    </>
  )
}

export default Searchbar