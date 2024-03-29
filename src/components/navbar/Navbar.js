import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink, useLocation } from "react-router-dom"
import { AiOutlineBars } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import navLogo from "../../assets/navbar/navbarLogo.png"



function Navbar() {
  const {pathname} = useLocation()
  const [navToggle, setNavToggle] = useState(false)
  if(pathname.includes("admin") || pathname.includes("login")){
    return <></>
  }

  document.body.style.overflow = navToggle ? "hidden" : "auto"


  return (
    <div className=''>
       <div className={navToggle ? "container nav__wrapper" : "container"} onClick={() => {
        setNavToggle(false)
       }}>
       </div>
       <div className="container navbar">
       <div className="nav__logo">
          <NavLink to={"/"}><img src={navLogo} alt="" /></NavLink>
        </div>
        <div className="navbar__collection" >
          <ul className={navToggle ? " nav__collection activeNav " : "nav__collection"}>
            <li onClick={()=> setNavToggle(false)} className="nav__routes"><NavLink to={"/"}>Asosiy sahifa</NavLink></li>
            <span className='cutter__navbar'>|</span>
            <li onClick={()=> setNavToggle(false)} className="nav__routes"><NavLink to={"/service"}>Xizmatlar</NavLink></li>
            <span className='cutter__navbar'>|</span>
            <li onClick={()=> setNavToggle(false)} className="nav__routes"><NavLink to={"/after"}>Ishlarimiz</NavLink></li>
          </ul>
            <span className="nav__routes"><AiOutlineBars onClick={() => setNavToggle(!navToggle)} className='navbar__bars'/></span>
        </div>
       </div>
    </div>
  )
}

export default Navbar