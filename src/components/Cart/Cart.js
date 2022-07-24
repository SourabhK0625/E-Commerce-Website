import React, { useContext } from "react";
import Card from "../../components/UI/Card"
import "./Cart.css";
import CartContext from "./CartContext";


// const cartElements = 
//     [
//         {
//             title: 'Colors',
//             price: 100,
//             imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//             quantity: 2,
//         },
//         {
//             title: 'Black and white Colors',
//             price: 50,
//             imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//             quantity: 3,
//         },
//         {
//             title: 'Yellow and Black Colors',
//             price: 70,
//             imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//             quantity: 1,
//         }
//     ]


const Cart = props =>
{   
    const crtCtx = useContext(CartContext);
    const cartItems = <ul>
        {
            crtCtx.items.map(item=>
                <div className="itemList">
                    <img className="image" src={item.imageUrl} alt=""></img>
                    <div className="title-Price-Quantity">{item.title}</div>
                    <div className="title-Price-Quantity">{`Rs${item.price}`}</div>
                    <div className="title-Price-Quantity">{item.quantity}</div>
                    <button onClick={() =>
                            crtCtx.removeItem({
                            title: item.title,
                            price: item.price,
                            imageUrl: item.imageUrl,
                            quantity:1,
                            })
              }
              className="removeButton"
              style={{
                flex: "1.2",
                backgroundColor: "red",
                borderColor: "skyblue",
                color: "White",
                fontFamily: "sans-serif",
                fontSize:'large',
                borderRadius:'5px',
                marginLeft:'30px'
              }}
              >REMOVE</button>
                    
                </div>
                )
        }
    </ul>
    return(
        <Card>
            <button className="close" onClick={props.onClose}>X</button>
            <div className="cart">CART</div>
            <div className="itemList">
                <p className="para">Item</p>
                <p className="para">Price</p>
                <p className="para">Quantity</p>
            </div>
            {cartItems}
            <div className="total">Total Amount = {crtCtx.items.reduce((accumulator, curItem)=>{return accumulator + (curItem.quantity*curItem.price)},0)}</div>
            <button onClick={crtCtx.purchaseItems}>Purchase</button>
        </Card>
    );
};
export default Cart;