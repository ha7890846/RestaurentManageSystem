import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GiHamburger } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { TbCup } from "react-icons/tb";
import { IoArrowBackCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import veggieIcon from "../assets/salad.png";
import friesIcon from "../assets/french-fries.png";

const MenuPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   // Image mapping for each category
  //   const categoryImages = {
  //     burgers: BurgerImg,
  //     pizzas: PizzaImg,
  //     beverages: DrinkImg,
  //   };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(
          `https://restaurent-backend-bzlm.onrender.com/api/menuItems/${category}`
        );
        setItems(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [category]);

  if (loading) return <div className="loading">Loading menu...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <main className="cart-main">
      <section className="cart-header">
        <NavLink to="/dashboard">
          <IoArrowBackCircle size={40} />
        </NavLink>
        <div style={{ fontSize: "1.5rem" }}>
          Good Morning ! <br />
          Place Your Order Here:
        </div>
        <div className="cart-search">Search</div>
        <nav className="cart-nav">
          <NavLink to="/menu/burgers" className="nav-icon">
            <GiHamburger size={30} />
            Burger
          </NavLink>
          <NavLink to="/menu/pizzas" className="nav-icon">
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
      <section className="item-section">
        <div className="menu-grid">
          {items.map((item) => (
            <div key={item._id} className="menu-item">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
