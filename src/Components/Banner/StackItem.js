import React from 'react'
import { Box, Stack } from '@mui/system'

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@mui/material';

const useStyle = makeStyles({
  stackLink: {
    opacity: 0.9,
    color: '#fff',
    fontSize:'12px',
    fontWeight: 500
    
  },
})
const StackItem = () => {
  const stackstyle= useStyle();
  return (
    <>
    <Box  p={1}>
      <Stack direction="row" spacing={5}  mx={2}>
          <Typography className={stackstyle.stackLink}>
            Buy
          </Typography>
          <Typography className={stackstyle.stackLink}>
            Rent
          </Typography>
          <Typography className={stackstyle.stackLink}>
            Project
          </Typography>
      </Stack>
      
    </Box>
      
    </>
  )
}

export default StackItem