import React from 'react'
import Landingpage from './Landingpage'
import Material from './Material'
import Chooseus from './Chooseus'
import Moderninterior from './Moderninterior'
import Popularproduct from './Popularproduct'
import Testimonials from './Testimonials'
import HomeBlog from './Homeblog/HomeBlog'
const Home = () => {
  return (
    <div>
        <Landingpage data='Modern Interior Design Studio
'/>
        <Material/>
        <Chooseus/>
        <Moderninterior/>
        <Popularproduct/>
        <Testimonials/>
        <HomeBlog/>
    
      
    </div>
  )
}

export default Home
