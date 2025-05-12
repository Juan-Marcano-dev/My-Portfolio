import Navbar from "../Navbar";
import React from 'react'
import StarsBackground from '../StarsBackground';
import ContentMain from '../ContentMain';
import ScrollArrow from '../ScrollArrow';
import GravityText from '../GravityText';

function Layout() {
  return (
    <>
      <Navbar/>
      <StarsBackground/>
      <ScrollArrow/>
      <GravityText/>
      <ContentMain/>
      
    </>
  )
}

export default Layout
