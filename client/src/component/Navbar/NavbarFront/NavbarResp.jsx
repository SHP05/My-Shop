import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavbarResp.css'

// import CloseIcon from '@mui/icons-material/Close';


const NavbarFront = () => {
  // const scroll = document.querySelector('.nav')
  // window.addEventListener('scroll',()=>{
  //   if(window.scrollY >= 60)
  //   {scroll.classList.add('navbar-scrolled')}
  //   else if(window.scrollY < 60)
  //   {scroll.classList.remove('navbar-scrolled')}

  // })
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <>
      <nav className="fixed-top nav">
      <div className="title d-flex-row">
          <a className="navbar-brand fw-bold fs-3 d-flex" href="/">
            <p style={{color:"#52aec7"}}>MY</p>
            <p className="mx-2" style={{color:"rgb(213, 213, 231)"}}>SHOP</p>
          </a></div>
        <div className="menu" onClick={
          () => {
            setmenuOpen(!menuOpen)
          }
        }>
          { menuOpen ? (<h1><i class="fa-solid fa-xmark"></i></h1>) : (<h1><i class="fa-solid fa-bars"></i></h1>)}
          {/* <span></span>
          <span></span>
          <span></span> */}
        </div>
        <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/login" className="underline">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="underline">
            Signup
          </NavLink>
        </li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarFront;