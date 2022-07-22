import React from "react";

const CartContext = React.createContext(
    {
        items:[],
        totalAMount:0,
        addItem: (item)=>{},
        removeItem: (id)=> {},
        item:'',
        isLoggedIn: false,
        addToken: ()=>{},
        removeToken: ()=> {}
    }
);

export default CartContext;