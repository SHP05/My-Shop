import React from 'react'
import "./cart.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delCart } from '../../redux/action'
import { NavLink } from 'react-router-dom'
import { addCart } from "../../redux/action";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Navbar from "../Navbar/NavbarNew/NavbarResp";

const Cart = () => {
    const state1 = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleClose = (cartItem) => {
        dispatch(delCart(cartItem))
    }
    
    //increment or decrement
    const disspach = useDispatch();
    const addProduct = (product) =>{
        disspach(addCart(product));
    }
    const delProduct = (product) =>{
        dispatch(delCart(product));
    }
    const cartItems = (cartItem) => {
        return(
            <>
            <div className="cartCard my-5">
            {
                //  state1.map(p => 
                 <div className="cartCards mx-auto">
                     <img src={cartItem.image} alt={cartItem.title} />
                     <h3>{cartItem.title.substring(0,25)}...</h3>
                     <h5>{cartItem.price}</h5>
                     <span>
                         <IconButton  aria-label="delete" size="small">
                             <RemoveIcon className="icon" onClick={() => delProduct(cartItem)} />
                         </IconButton>
                         <h3>{cartItem.qty}</h3>
                         <IconButton  aria-label="delete" size="small">
                             <AddIcon className="icon" onClick={() => addProduct(cartItem)} />
                         </IconButton>
                     </span>
                     <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                 </div>
                //  )
             }
            </div>
         </>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 rounded-3 py-5">
                <div className="container py-4">
                    <div className="row d-flex-center">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container my-4">
                <div className="row">
                <NavLink to="/checkout" className="button-28 mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
        <Navbar/>
        <main>            
            <div className='cart-container my-5 mt-lg-5 position-relative'>
            {state1.length === 0 && emptyCart()}
            {state1.length !== 0 && state1.map(cartItems)}
            {state1.length !== 0 && button()}
            </div>
        </main>
        </>
    )
}

export default Cart;