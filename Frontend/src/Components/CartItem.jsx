import { IoArrowBackCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const CartItem = () => {
  const [orderType, setOrderType] = useState("dine-in");
  return (
    <main className="cart-main">
      <section className="cart-header">
        <NavLink to="/dashboard">
          <IoArrowBackCircle size={40} />
        </NavLink>
        <div style={{ fontSize: "1.5rem" }}>
          Good Morning! <br />
          Place Your Order Here:
        </div>
        <div className="cart-search">Search</div>
      </section>
      <div className="cart-item">
        box
        <p>Add cooking Instructions (Optional)</p>
      </div>
      <div className="order-type-toggle">
        <button
          className={`order-type-btn ${
            orderType === "dine-in" ? "active" : ""
          }`}
          onClick={() => setOrderType("dine-in")}
        >
          Dine-In
        </button>
        <button
          className={`order-type-btn ${
            orderType === "takeaway" ? "active" : ""
          }`}
          onClick={() => setOrderType("takeaway")}
        >
          Take Away
        </button>
      </div>
      <div className="order-summary">
        <div>Item Total</div>
        <div>500</div>
      </div>
      <section className="delivery-info"></section>
    </main>
  );
};
export default CartItem;
