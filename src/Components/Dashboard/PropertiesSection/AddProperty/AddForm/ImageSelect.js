import { Box , Typography } from '@mui/material'
import React, {createRef} from 'react'
import Dropzone from 'react-dropzone'

const ImageSelect = () => {
    const dropzoneRef = createRef()

  
  return (
    <Box>
       <Typography  mx={1} variant='body1' component='div' >
            Select Your Property Images
        </Typography>
 
         <Box mt={2} style={{border:'1px solid black' , padding:'20px' , cursor:'pointer'}}>
         <Dropzone ref={dropzoneRef} >
  {({getRootProps, getInputProps}) => (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Typography textAlign='center'>Drag or Upload Images</Typography>
    </div>
  )}
</Dropzone>
         </Box>
       
    </Box>
  )
}

export default ImageSelect