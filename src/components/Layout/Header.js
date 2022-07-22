import React, { useContext } from "react";
import CartContext from "../Cart/CartContext";
import "./Header.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Header = props =>
{
    const crtCtx = useContext(CartContext)
    return (
    <div className="headerNav">
        
        <NavLink to="/About" className="headerButton">About</NavLink>
        <NavLink to="/Login" className="headerButton">Login</NavLink>
        <NavLink to="/Home" className="headerButton">Home</NavLink>
        <NavLink to="/Store" className="headerButton">Store</NavLink>
        <NavLink to="/Contact" className="headerButton">Contact Us</NavLink>
        <button onClick={props.onShowCart} className="cartButton">Cart 
        <div className="cartCount"> {crtCtx.items.reduce((accumulator, curItem)=>{return accumulator + curItem.quantity},0)}</div></button>
    </div>)
};
export default Header;