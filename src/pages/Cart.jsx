import Navbar from "./Navbar";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../Context/Cartcontext";
function Cart() {
  const {
    cartItem,
    addItemtoCart,
    removeItemtoCart,
    clearCart,
    cartTotal,
    cartDiscount,
    cartCount,
  } = useContext(CartContext);
  console.log(cartItem);
  const handleAdd = (item) => {
    addItemtoCart(item);
  };
  const handleRemove = (item) => {
    removeItemtoCart(item);
  };
  const handleRemoveTo = (item) => {
    clearCart(item);
  };

  return (
    <>
      {cartItem.length > 0 ? (
        cartItem.map((item) => (
          <div className="product-parent">
            <div className="cart">
              <div className="cart-cointainer">
                <div className="cart-child">
                  <div className="cart-image">
                    <img src={item.image} />
                  </div>
                  <div className="cart-child1">
                    <button onClick={() => handleAdd(item)}>+</button>
                    <p>Qty:{item.quantity}</p>
                    <button onClick={() => handleRemove(item)}>-</button>
                  </div>
                </div>
                <div className="inner-p">
                  <h2>{item.title}</h2>
                  <h4> INR {item.price}</h4>
                  <h6>{item.description}</h6>
                </div>
              </div>
              <button className="p-btn" onClick={() => handleRemoveTo(item)}>
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Your Cart is Empty
        </h3>
      )}

      <>
        {cartItem.length > 0 ? (
          <div className="amt-container">
            <h2>PRICE DETAILS({cartCount} items)</h2>
            <div className="amt-child">
              <div className="amt-child1">
                <h4>Total MRP </h4>
                <h4>{cartTotal.toFixed(2)}</h4>
              </div>
              <div className="amt-child2">
                <h4>Discount MRP(10%)</h4>
                <h4>{cartDiscount.toFixed(2)}</h4>
              </div>
            </div>
            <div className="amt-child3">
              <h4>Total Amount</h4>
              <h4>{(cartTotal - cartDiscount).toFixed(2)}</h4>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </>
    </>
  );
}

export default Cart;
