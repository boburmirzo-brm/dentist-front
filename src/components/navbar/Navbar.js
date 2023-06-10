import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import logo from "../../assets/navbar/logo-wide.png"



function Navbar() {
  return (
    <div className='navbar'>
      <div className="container navbar__container">
        <div className="nav__logo-container">
        <img typeof='Link' className='nav__logo' to={"/"} src={logo} alt="" />
        </div>
        <ul className='navbar__collection'>
        <Link className='alone__logo-home none'>sahifalar</Link>
          <Link className='nav__item late__none' to={"/"}>asosiy</Link>
          <Link className='nav__item' to={"/care-teeth"}>tishlarni parvarishlash </Link>
          <Link className='nav__item' to={"/about"}>haqida</Link>
          <Link className='nav__item' to={"/service"}>xizmat</Link>
          <Link className='nav__item none'>yangiliklar</Link>

        </ul> 
      </div>
    </div>
  )
}

export default Navbar