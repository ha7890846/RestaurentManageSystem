import { GiHamburger } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { TbCup } from "react-icons/tb";
import { IoArrowBackCircle } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import veggieIcon from "../assets/salad.png";
import friesIcon from "../assets/french-fries.png";
const OrderCart = () => {
  return (
    <main className="cart-main">
      <section className="cart-header">
        <NavLink to="/dashboard">
          <IoArrowBackCircle size={40} />
        </NavLink>
        <div>
          Good Morning ! <br />
          Place Your Order Here:
        </div>
        <div className="cart-search">Search</div>
        <nav className="cart-nav">
          <NavLink to="/cart/burger" className="nav-icon">
            <GiHamburger size={30} />
            Burger
          </NavLink>
          <NavLink to="/cart/pizza" className="nav-icon">
            <GiFullPizza size={30} />
            Pizza
          </NavLink>
          <NavLink className="nav-icon">
            <TbCup size={30} />
            Drink
          </NavLink>
          <NavLink className="nav-icon">
            <img src={friesIcon} width={30} height={30} alt="" />
            Fries
          </NavLink>
          <NavLink className="nav-icon">
            <img src={veggieIcon} width={30} height={30} alt="" />
            Veggie
          </NavLink>
        </nav>
      </section>
      <section className="cart-item-container">
        <Outlet />
      </section>
    </main>
  );
};
export default OrderCart;
