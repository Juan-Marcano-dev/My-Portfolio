import React from 'react'

function HeaderNav() {
  return (
    <div className="container-navbar">
      <nav className="navbar">
        <div className="text-intro">
          <h4 >{'<JCMR>'}</h4>
        </div>
        <ul className="ul-nav">
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderNav
