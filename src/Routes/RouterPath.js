import React, { useState,useEffect } from 'react'
import { Routes ,Route ,Navigate } from 'react-router-dom'
import Dashboard from '../Components/PagesComponent/Dashboard/Dashboard'
import EditProperties from '../Components/PagesComponent/Dashboard/UserProperties/EditProperties'
import MyProperties from '../Components/PagesComponent/Dashboard/UserProperties/MyProperties'

import Aboutus from '../Pages/Aboutus/Aboutus'
import BuyProperties from '../Pages/AddProperties/BuyProperties'
import RentProperties from '../Pages/AddProperties/RentProperties'
import Architect from '../Pages/Architect/Architect'
import Blogs from '../Pages/Blogs/Blogs'

import Home from '../Pages/Home/Home'
import ListingProperty from '../Pages/ListingProperty/ListingProperty'
import Login from '../Pages/Login/Login'
import News from '../Pages/News/News'
import Products from '../Pages/Products/Products'
import Projects from '../Pages/Projects/Projects'

import Signup from '../Pages/Signup/Signup'




const RouterPath = () => {
// const [token,setToken] = useState(null);




 

//  const userRef= useRef();



//  useEffect(()=>{
// const _tok = localStorage.getItem("token");
// setToken(_tok)
//  },[])


  return (
    <div>
      <Routes>
          <Route path='/' exact element={<Navigate to='/Home'  / >}  />
            <Route path='/home' element={<Home />} />
            <Route path='/listingProperty' element={<ListingProperty />} />
          
            <Route path='/project'  element={<Projects />} />
            <Route path='/products'  element={<Products />} />
            <Route path='/architect'  element={<Architect />} />
            <Route path='/blogs'  element={<Blogs />} />
            <Route path='/aboutus'  element={<Aboutus />} />
            <Route path='/news'  element={<News />} />
            {/* {!token ?
              <> */}
               <Route path='/login'  element={<Login />} />
               <Route path='/signup'  element={<Signup />} />
              {/* </>  
                  :
                 <> */}
                  <Route path='/dashboard'  element={<Dashboard />} />
                  <Route path='/dashboard/MyProperties'  element={<MyProperties />} />
                  <Route path='/dashboard/MyProperties/Edit'  element={<EditProperties />} />
                  <Route path='/dashboard/MyProperties/AddProperty/Buy'  element={<BuyProperties />} />
                  <Route path='/dashboard/MyProperties/AddProperty/Rent'  element={<RentProperties />} />
                 {/* </> 

              } */}
            <Route path='*'  element={()=><h1>Page Not FOund</h1>} />

               
       </Routes>

          
            
          
          


        
        
    </div>
  )
}

export default RouterPath