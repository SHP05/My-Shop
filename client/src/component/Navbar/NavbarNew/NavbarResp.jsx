import React, { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import './NavbarResp.css'


import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';

const Navbar = () => {

  const state = useSelector((state) => state.handleCart)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const signoutHandler = () => {
    localStorage.clear();
    Navigate("/")
  }
  useEffect(()=>{

  },[])
  const [menuOpen, setmenuOpen] = useState(false);
  // const [icon,seticon] = useState('DensityMediumIcon')  
  return (
    <>
      <nav className="fixed-top">
        <div className="title d-flex-row">
          <a className="navbar-brand fw-bold fs-3 d-flex" href="/home">
            <p style={{ color: "#2b6777" }}>MY</p>
            <p className="mx-2">SHOP</p>
          </a></div>
        <div className="menu" onClick={
          () => {
            setmenuOpen(!menuOpen)
          }
        }>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>

            <NavLink to="/home" className="underline">
              Home
            </NavLink>

          </li>
          <li>

            <NavLink to="/products" className="underline">
              Products
            </NavLink>

          </li>
          <li>

            <NavLink to="/cart" className="underline">
              Cart
            </NavLink>

          </li>
          <li>

            <NavLink to="/checkout" className="underline">
              Checkout
            </NavLink>

          </li>
          <li>

            <NavLink to="/contact" className="underline">
              Contact us
            </NavLink>

          </li>
          <li>

            <NavLink to="/cart" className="underline">
              <span><i className="fa-solid fa-cart-shopping"></i> {state.length}</span>
            </NavLink>

          </li>
          <li>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title="User Info">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}><i class="fa-solid fa-user"></i></Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>Email</MenuItem>
              <MenuItem>{localStorage.getItem('email')}</MenuItem>
              <Divider />
              <NavLink to="/" onClick={signoutHandler}>
                <MenuItem onClick={signoutHandler} >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <NavLink to="/">LogOut</NavLink>
                </MenuItem>
              </NavLink>
            </Menu>
          </li>
          <li>

            <NavLink to="/home" className="underline">
              {localStorage.getItem('name')}
            </NavLink>

          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;