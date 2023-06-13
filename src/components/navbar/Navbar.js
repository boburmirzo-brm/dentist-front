import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink, useLocation } from "react-router-dom"
import { AiOutlineBars } from "react-icons/ai"
import { GrFormClose } from "react-icons/gr"
import navLogo from "../../assets/navbar/navbarLogo.png"



function Navbar() {
  const {pathname} = useLocation()
  const [navToggle, setNavToggle] = useState(false)
  if(pathname === "/admin" || pathname === "/login"){
    return <></>
  }

  return (
    <div className='container'>
       <div className="navbar">
       <div className="nav__logo">
          <NavLink to={"/"}><img src={navLogo} alt="" /></NavLink>
        </div>
        <div className="navbar__collection">
          <ul className={navToggle ? " nav__collection activeNav " : "nav__collection"}>
            <li className="nav__routes"><NavLink to={"/"}>Asosiy sahifa</NavLink></li>
            <li className="nav__routes"><NavLink to={"/care-teeth"}>Tish g'amxo'rligi</NavLink></li>
            <li className="nav__routes"><NavLink to={"/about"}>Biz haqimizda</NavLink></li>
            <li className="nav__routes"><NavLink to={"/service"}>Xizmatlar</NavLink></li>
            <li className="nav__routes"><NavLink to={"/login"}>Login</NavLink></li>
            <li className="siderbar__links"><GrFormClose onClick={()=> setNavToggle(false)} className='sidebar__close'/></li>
          </ul>
            <span className="nav__routes"><AiOutlineBars onClick={() => setNavToggle(!navToggle)} className='navbar__bars'/></span>
        </div>
       </div>
    </div>
  )
}

export default Navbar