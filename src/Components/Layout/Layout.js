import React from 'react'
import RouterPath from '../../Routes/RouterPath'

import Footer from './Footer'
import Header from './Header'


const Layout = () => {
  return (
    <div>
      <Header />
    
        <RouterPath />
      <Footer />
    </div>
  )
}

export default Layout