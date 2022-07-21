import React, { useContext } from "react";
import CartContext from "../Cart/CartContext";
import "./Header.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Header = props =>
{
    const crtCtx = useContext(CartContext)
    return (
    <div className="headerNav">
        {/* <button className="headerButton">Home</button> */}
        <NavLink to="/Home" className="headerButton">Home</NavLink>
        <NavLink to="/Store" className="headerButton">Store</NavLink>
        <NavLink to="/About" className="headerButton">About</NavLink>
        {/* <button className="headerButton">Store</button>
        <button className="headerButton">About</button> */}
        <button onClick={props.onShowCart} className="cartButton">Cart 
        <div className="cartCount"> {crtCtx.items.reduce((accumulator, curItem)=>{return accumulator + curItem.quantity},0)}</div></button>
    </div>)
};
export default Header;