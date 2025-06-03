import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Burgers = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

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

  
  if (loading) return <div>Loading menu items...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="category-page">
      <h1 className="category-title">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <div className="menu-grid">
        {items.map((item) => (
          <div key={item._id} className="menu-item">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Burgers;