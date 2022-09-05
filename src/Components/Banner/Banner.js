import { Box } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/styles';
// import bannerimage from '../../Assets/Images/1.webp'
import buyCover from '../../Assets/Images/buyCover.webp'
import Text from './Text';
import StackItem from './StackItem';
import Searchbar from './Searchbar';

const useStyle = makeStyles({
    Box:{
        padding:10,
        margin:0,
        backgroundImage:`url(${buyCover})`,
        // width:'100%',
        height:'70vh',
        objectFit:'cover',
        backgroundSize:'100% 100%',
        borderRadius:'0px 0px 40px 40px',
        
        // textAlign:'center',
        color:'white'


    },

    stackBanner:{
        background:'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(10px)',
        borderRadius: '15px 15px 41px 41px',
        width:'746px',
        zIndex:1

    }
})

const Banner = () => {
    const bannerstyle= useStyle();

  return (
    <Box >
        <Box className={bannerstyle.Box}>
        <Box pt={20} px={10}>
            <Text />

            <Box mt={2} className={bannerstyle.stackBanner}>
                <StackItem />
                <Searchbar />
            </Box>
 
        </Box>
    </Box>
    </Box>
    

  )
}

export default Banner