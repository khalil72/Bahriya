

import React  from "react";

import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0,3),
    height: '100%',
    position: 'absolute',
    right:'6px',
    top:'-5px',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    color:'black',
    cursor:'pointer'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
      padding: theme.spacing(2, 2, 1, 1),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
const SearchForm = () => {
    
  
  return (
    <div>
     <form>
       
     <Search>
           
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
             <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>

     </form>
    </div>
  )
}

export default SearchForm