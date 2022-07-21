import { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = props =>{
    let [isItems, setIsItems] = useState([]);


    const addItemHandler= (item)=>
    {
        const filteredList = isItems.filter((itm)=> itm.title === item.title)
        if(filteredList.length !== 0)
        {
            isItems.forEach(element => 
            {
                if(element.title === filteredList[0].title)
                {
                    element.quantity +=1;
                }
            });
            setIsItems([...isItems]);
        }       
        else {
            setIsItems([...isItems , item])
        }
    };
    console.log(isItems)

    const removeItemHandler = (item)=>{
        const filteredList = isItems.filter((itm1)=> itm1.title === item.title)
        for(let i=0; i<isItems.length; i++)
        {
            if(isItems[i]===filteredList[0])
            {
                isItems.splice(i , 1)
            }
        }
        setIsItems([...isItems])
    };
    const cartContext = {
        items:isItems,
        totalAMount:0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    );

};

export default CartProvider;