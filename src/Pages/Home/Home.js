
import { Box } from '@mui/system'
import React from 'react'

import Banner from '../../Components/Banner/Banner'
// import CardBanner from '../../Components/Banner/CardBanner'

import HomeBanner from '../../Components/Banner/HomeBanner'
import Blogs from '../../Components/Blogs/Blogs'


import PropertyListing from '../../Components/Listing/PropertyListing'
import FeaturedProjects from '../../Components/Projects/FeaturedProjects'
import TrendingProjects from '../../Components/Projects/TrandingProjects'


const Home = () => {
  return (
    <Box>
     <Banner />
     <HomeBanner />
     {/* <CardBanner /> */}
     
     <Box p={3} mt={2} mb={0}>

      
   
       
     
          
       {/* recently add */}
       <PropertyListing />   
       {/* <HomeBanner />   */}

       {/* project section  */}
       <FeaturedProjects />
       <TrendingProjects />
       {/* <HomeBanner />  */}
       {/* <City /> */}
        <Blogs />
        

     </Box>
     {/* <ServicesForm /> */}
    
    </Box>
  )
}

export default Home