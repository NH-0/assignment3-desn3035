import React from 'react'
import Logo from '../assets/Scentful Bliss.png'

function Navbar() {
  return (
    <div className="navbar">
    <div className="leftside"></div>
    <img src={Logo} />
    <div className="rightside">
      hello
    </div>
    </div>
  )
}

export default Navbar