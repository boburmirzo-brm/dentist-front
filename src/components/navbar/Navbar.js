import React from 'react'
import "./Navbar.css"
import { NavLink, useLocation } from "react-router-dom"
import { AiOutlineBars } from "react-icons/ai"
import { GrFormClose } from "react-icons/gr"
import navLogo from "../../assets/navbar/navbarLogo.png"



function Navbar() {
  const {pathname} = useLocation()
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
          <ul className="nav__collection">
            <li className="nav__routes"><NavLink to={"/"}>Asosiy sahifa</NavLink></li>
            <li className="nav__routes"><NavLink to={"/care-teeth"}>Tish g'amxo'rligi</NavLink></li>
            <li className="nav__routes"><NavLink to={"/about"}>Biz haqimizda</NavLink></li>
            <li className="nav__routes"><NavLink to={"/service"}>Xizmatlar</NavLink></li>
            <li className="nav__routes"><NavLink to={"/login"}>Login</NavLink></li>
            <li className="nav__routes"><AiOutlineBars className='navbar__bars'/></li>
          </ul>
        </div>
        <div className="sidebar__navbar show__sidebar">
            <div className="sidebar__collection">
              <ul className="sidebar__routes">
                <li className="siderbar__links"><GrFormClose className='sidebar__close'/></li>
                <li className="sidebar__links"><NavLink to={"/"}>Asosiy sahifa</NavLink></li>
                <li className="sidebar__links"><NavLink to={"/care-teeth"}>Tish g'amxo'rligi</NavLink></li>
                <li className="sidebar__links"><NavLink to={"/about"}>Biz haqimizda</NavLink></li>
                <li className="sidebar__links"><NavLink to={"/service"}>Xizmatlar</NavLink></li>
                <li className="sidebar__links"><NavLink to={"/login"}>Login</NavLink></li>
              </ul>
            </div>
       </div>
       </div>
    </div>
  )
}

export default Navbar