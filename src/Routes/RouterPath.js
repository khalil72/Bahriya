import React from 'react'
import { Routes ,Route ,Navigate } from 'react-router-dom'
import Dashboard from '../Components/PagesComponent/Dashboard/Dashboard'
import EditProperties from '../Components/PagesComponent/Dashboard/UserProperties/EditProperties'
import MyProperties from '../Components/PagesComponent/Dashboard/UserProperties/MyProperties'

import Aboutus from '../Pages/Aboutus/Aboutus'
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
            <Route path='/login'  element={<Login />} />
            <Route path='/signup'  element={<Signup />} />
            <Route path='/aboutus'  element={<Aboutus />} />
            <Route path='/news'  element={<News />} />
            
            <Route path='/dashboard'  element={<Dashboard />} />
            <Route path='/dashboard/MyProperties'  element={<MyProperties />} />
            <Route path='/dashboard/MyProperties/Edit'  element={<EditProperties />} />


          


        </Routes>
        
    </div>
  )
}

export default RouterPath