import React from 'react'
import Landingpage from '../Home/Landingpage'
import Material from '../Home/Material'
import Chooseus from '../Home/Chooseus'
import Ourteam from './Ourteam/Ourteam'
import Testimonials from '../Home/Testimonials'
const Aboutus = () => {
    
  return (
    <div>
    <Landingpage data='About Us'/>
    <Chooseus />
    <Ourteam />
    <Testimonials />

      
    </div>
  )
}

export default Aboutus
