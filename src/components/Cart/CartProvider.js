import { useState, useEffect } from "react";
import CartContext from "./CartContext";
const emailLoggedIn = localStorage
  .getItem("emailLoggedIn")
  .replace("@", "")
  .replace(".", "");
const CartProvider = (props) => {
  let [isItems, setIsItems] = useState([]);
  const initialToken = localStorage.getItem("token");
  let [isToken, setIsToken] = useState(initialToken);
  let identifier;

  async function getInitialData() {
    let initialData = [];
    let response = await reqGET();
    if (response.length === 0) {
      return [];
    } else {
      for (const vals of Object.values(response)) {
        initialData.push(vals);
      }
      console.log(initialData);
      setIsItems(initialData);
    }
  }
  useEffect(() => {
    getInitialData();
  }, []);

  async function reqGET() {
    const response = await fetch(
      `https://swapi-366f3-default-rtdb.firebaseio.com/${emailLoggedIn}.json`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return [];
    }
  }

  async function reqPATCH(id, quantityUpdater) {
    const response = await fetch(
      `https://swapi-366f3-default-rtdb.firebaseio.com/${emailLoggedIn}/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({ quantity: quantityUpdater + 1 }),
      }
    );
  }
  function check(data, title) {
    outer: for (const [key, value] of Object.entries(data)) {
      for (const subVal of Object.values(value)) {
        if (subVal === title) {
          identifier = key;
          console.log(identifier);
          break outer;
        }
      }
    }
  }

  const userIsLoggedIn = !!isToken;
  const addTokenHandler = (item) => {
    setIsToken(item);
    localStorage.setItem("token", item);
  };

  const removeTokenHandler = () => {
    setIsToken(null);
    localStorage.removeItem("token");
  };

  const addItemHandler = (item) => {
    const filteredList = isItems.filter((itm) => itm.title === item.title);
    if (filteredList.length !== 0) {
      isItems.forEach((element) => {
        if (element.title === filteredList[0].title) {
          let quantBack = element.quantity;
          element.quantity += 1;

          async function updateQuantity() {
            const data = await reqGET();
            check(data, element.title);
            reqPATCH(identifier, quantBack);
          }
          updateQuantity();
        }
      });
      setIsItems([...isItems]);
    } else {
      setIsItems([...isItems, item]);
      fetch(
        `https://swapi-366f3-default-rtdb.firebaseio.com/${emailLoggedIn}.json`,
        {
          method: "POST",
          body: JSON.stringify({
            title: item.title,
            imageUrl: item.imageUrl,
            price: item.price,
            quantity: item.quantity,
          }),
        }
      ).then((res) => {
        console.log(res);
      });
    }
  };
  console.log(isItems);

  const removeItemHandler = (item) => {
    const filteredList = isItems.filter((itm1) => itm1.title === item.title);
    for (let i = 0; i < isItems.length; i++) {
      if (isItems[i] === filteredList[0]) {
        isItems.splice(i, 1);
      }
    }
    setIsItems([...isItems]);
  };
  const cartContext = {
    items: isItems,
    totalAMount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    tokens: isToken,
    isLoggedIn: userIsLoggedIn,
    addToken: addTokenHandler,
    removeToken: removeTokenHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
