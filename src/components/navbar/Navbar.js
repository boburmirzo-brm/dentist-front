import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <div className='navbar'>
      <div className="container navbar__container">
        <Link to={"/"}>Ozodbek</Link>
        <ul className='navbar__collection'>
          <Link to={"/care-teeth"}>care-teeth</Link>
          <Link to={"/about"}>about</Link>
          <Link to={"/service"}>service</Link>

        </ul> 
      </div>
    </div>
  )
}

export default Navbar