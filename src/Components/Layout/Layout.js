import { Box } from '@mui/material'
import React from 'react'
import RouterPath from '../../Routes/RouterPath'

import Footer from './Footer'
import Header from './Header'


const Layout = () => {
  return (
    <>
      <Header />
      <Box style={{marginBottom:'0px !important'}}>
      <RouterPath />
      </Box>
     
      <Footer />
    </>
  )
}

export default Layout