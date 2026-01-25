import "./Home.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/Cartcontext";

function Home() {
  const [userData, setUserData] = useState([]);
  const { addItemtoCart } = useContext(CartContext);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(userData);
  const fetchData = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  const handleButton = (item) => {
    addItemtoCart(item);
  };

  return (
    <div>
      {userData.map((item) => (
        <div className="parent-product">
        <div className="product">
          <div className="product-cointainer">
            <div key={item.id} className="image">
              <img src={item.image} />{" "}
            </div>
            <div className="inner-p">
              <h2>{item.title}</h2>
              <h4> INR {item.price}</h4>
              <h6>{item.description}</h6>
              <button id="p-btn" onClick={() => handleButton(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
