import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { GiHamburger, GiFullPizza } from "react-icons/gi";
import { TbCup } from "react-icons/tb";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdOutlineCurrencyRupee} from "react-icons/md";
import veggieIcon from "../assets/salad.png";
import friesIcon from "../assets/french-fries.png";
import defaultFoodImg from "../assets/burger/chickenBurger.jpeg";

const MenuPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCartButton, setShowCartButton] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(
          `https://restaurent-backend-bzlm.onrender.com/api/menuItems/${category}`
        );
        const itemsWithQty = res.data.map((item) => ({
          ...item,
          quantity: 0,
        }));
        setItems(itemsWithQty);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [category]);

  useEffect(() => {
    setShowCartButton(items.some(item => item.quantity > 0));
  }, [items]);

  const updateQuantity = (itemId, newQty) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId ? { ...item, quantity: Math.max(0, newQty) } : item
      )
    );
  };

  const handleCartClick = () => {
    const cartItems = items.filter(item => item.quantity > 0);
    navigate('/cart', { state: { cartItems } });
  };

  if (loading) return <div className="loading">Loading menu...</div>;
  if (error) return <div className="error">Error: {error}</div>;

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
        <nav className="cart-nav">
          <NavLink to="/menu/burgers" className="nav-icon">
            <GiHamburger size={30} />
            Burger
          </NavLink>
          <NavLink to="/menu/pizzas" className="nav-icon">
            <GiFullPizza size={30} />
            Pizza
          </NavLink>
          <NavLink to="/menu/beverages" className="nav-icon">
            <TbCup size={30} />
            Drink
          </NavLink>
          <NavLink className="nav-icon">
            <img src={friesIcon} width={30} height={30} alt="Fries" />
            Fries
          </NavLink>
          <NavLink className="nav-icon">
            <img src={veggieIcon} width={30} height={30} alt="Veggie" />
            Veggie
          </NavLink>
        </nav>
      </section>

      <section className="item-section">
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <div className="menu-grid">
          {items.map((item) => (
            <div key={item._id} className="menu-item">
              <div className="menu-item-pic">
                <img
                  src={item.image || defaultFoodImg}
                  alt={item.name}
                  height={95}
                  width={140}
                />
              </div>
              <div className="menu-item-info">
                <h3
                  style={{
                    fontSize: "16px",
                    margin: "8px",
                    marginBottom: "5px",
                  }}
                >
                  {item.name}
                </h3>
                <div className="price-qty-container">
                  <p className="price">
                    <MdOutlineCurrencyRupee />
                    {item.price.toFixed(2)}
                  </p>
                  <div className="quantity-controls">
                    {item.quantity > 0 && (
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity - 1)
                        }
                        className="add-item-btn"
                      >
                        -
                      </button>
                    )}
                    {item.quantity > 0 && (
                      <span style={{ fontSize: "18px" }}>{item.quantity}</span>
                    )}
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                      className="add-item-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {showCartButton && (
        <button 
          className="cart-button" 
          onClick={handleCartClick}
        >
          next({items.filter(i => i.quantity > 0).reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      )}
    </main>
  );
};

export default MenuPage;