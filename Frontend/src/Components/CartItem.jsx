import { IoArrowBackCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SlideToProceed from "./Slider";
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
        <div>
          <p>Item Total</p>
          <p>Delivery Charges</p>
          <p>Plateform Fee</p>
          <h4>Grand Total</h4>
        </div>
        <div>
          <p>500</p>
          <p>50</p>
          <p>30</p>
          <h4>580</h4>
        </div>
      </div>
      <section className="delivery-info">
        <p>Your Details:</p>
        <form action="submit" className="cust-detail">
          <input type="text" name="cust-name" placeholder="Enter Name"/>
          <input type="text" name="cust-num" placeholder="Enter Mobile" />
          <input type="text" name="cust-add" placeholder="Address"/>
        </form>
      </section>
      <div>
        <p>Delivery at Home - Lorem ipsum dolor sit amet consectetur </p>
        <p>Delivery in time 12min</p>
      </div>
      <div className="App">
      <div className="app">
      <h1>Complete Your Action</h1>
      <SlideToProceed/>
         
    </div>
    </div>
    </main>
  );
};
export default CartItem;
