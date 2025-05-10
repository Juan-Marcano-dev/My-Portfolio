import Navbar from "../Navbar";
import React from 'react'
import StarsBackground from '../StarsBackground';
import ContentMain from '../ContentMain';
import ScrollArrow from '../ScrollArrow'

function Layout() {
  return (
    <>
      <Navbar/>
      <StarsBackground/>
      <ScrollArrow/>
      <ContentMain/>
      
    </>
  )
}

export default Layout
