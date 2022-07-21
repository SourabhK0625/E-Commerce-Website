import "./Store.css";
import CartContext from "../components/Cart/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Store = (props) => {
  const crtCtx = useContext(CartContext);
  const storeItems = (
    <ul className="unOrderedList">
      {props.prodList.map((item) => (
        <div key={item.key} className="mainList">
          <li className="itemTitle">{item.title}</li>
          <Link to="/Store/product">
            <img className="itemImage" src={item.imageUrl} alt="" onClick={() => props.productDetail({title:item.title , imageUrl: item.imageUrl , price:item.price})}/>
          </Link>
          <div>
            <div className="itemPrice">{`Rs${item.price}`}</div>
            <button
              onClick={() =>
                crtCtx.addItem({
                  title: item.title,
                  price: item.price,
                  imageUrl: item.imageUrl,
                  quantity:1,
                })
              }
              className="listButton"
              style={{
                flex: "1.2",
                backgroundColor: "skyblue",
                borderColor: "skyblue",
                color: "White",
                fontFamily: "verdana",
                fontSize:'large',
                borderRadius:'5px',
                marginLeft:'30px'
              }}

            >
              Add TO Cart
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
  return (
    <>
      <div className="itemMusic">Music</div>
      {storeItems}
    </>
  );
};
export default Store;
