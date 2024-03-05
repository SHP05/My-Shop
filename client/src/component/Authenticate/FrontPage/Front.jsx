import { React } from "react";
import './Front.css'
import NavbarFront from "../../Navbar/NavbarFront/NavbarResp";
import { NavLink } from "react-router-dom";

const Front = () => {
    return (
        <>
            <NavbarFront/>
            <div className="main_div">
            <div className="front1">
                {/* <div className="div1"><img src="" alt="" /></div> */}
                <center>
                <div className="div2">
                    <h1>Welcome to MY SHOP</h1>
                    <h2>Explore Our Latest Arrivals</h2>
                </div>
                <NavLink to="/login"><button class="buttons-28 mx-2" role="button">Login</button></NavLink>
                <NavLink to="/signup"><button class="buttons-28 mx-2" role="button">Sign in</button></NavLink>
                </center>
            </div> 
            </div>
        </>
    )
}

export default Front;