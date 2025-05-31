import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import orderLogo from "../assets/total-order.png";
import chefLogo from "../assets/total-chef.png";
import clientLogo from "../assets/total-clients.png";
import revLogo from "../assets/total-rev.png";
import { MdOutlineCurrencyRupee } from "react-icons/md";


const Dashboard = () => {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetchChefs();
  }, []);
  const totalChef = () => {
    return chef?.length;
  };

  const fetchChefs = async () => {
    const res = await axios.get("http://localhost:3000/api/chefs");
    setChef(res.data);
    console.log(res.data);
    console.log(totalChef);
  };
  return (
    <main className="dashboard-container">
      <h1 style={{ fontSize: "22px", fontWeight: "250" }}>Analytics</h1>

      <div className="total-cards">
        <div className="card">
          <img src={chefLogo} alt="chef-logo" />
          <div>
            <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "250" }}>
              {String(totalChef()).padStart(2, 0)}
            </h3>
            <p style={{ margin: "0", fontSize: "10px", fontWeight: "260" }}>
              TOTAL CHEF
            </p>
          </div>
        </div>
        <div className="card">
          <img src={orderLogo} alt="chef-logo" />
          <div>
            <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "250" }}>
              {totalChef()}K
            </h3>
            <p style={{ margin: "0", fontSize: "10px", fontWeight: "260" }}>
              TOTAL REVENUE
            </p>
          </div>
        </div>
        <div className="card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={revLogo} alt="chef-logo" />
            <div style={{ position: "relative", right: "54px" }}>
              <MdOutlineCurrencyRupee size={30} />
            </div>
          </div>
          <div>
            <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "250" }}>
              {String(totalChef()).padStart(2, 0)}
            </h3>
            <p style={{ margin: "0", fontSize: "10px", fontWeight: "260" }}>
              TOTAL ORDERS
            </p>
          </div>
        </div>
        <div className="card">
          <img src={clientLogo} alt="chef-logo" />
          <div>
            <h3 style={{ margin: "0", fontSize: "26px", fontWeight: "250" }}>
              {String(totalChef()).padStart(2, 0)}
            </h3>
            <p style={{ margin: "0", fontSize: "10px", fontWeight: "260" }}>
              TOTAL CLIENTS
            </p>
          </div>
        </div>
      </div>
      <div className="charts">
        <div className="chart-box">
          <div className="chart-title-box">
            <div>
              <h4 style={{ margin: "0" }}>Order Summary</h4>
              <p style={{ margin: "0", fontSize: "12px" }}>
                Stats, How we Serve the Best food Service.
              </p>
            </div>
            <div>filter</div>
          </div>
          <div className="chart-stats">
            <div className="order-count">
              <div className="order-type">
                09 <br /> Served
              </div>
              <div className="order-type">
                05 <br />Dine In</div>
              <div className="order-type">
                06 <br />Take Away</div>
            </div>
          </div>
        </div>
        <div className="chart-box">
          <div className="chart-title"></div>
          <div className="chart-stats"></div>
        </div>
        <div className="chart-box">
          <div className="chart-title"></div>
          <div className="chart-stats"></div>
        </div>
      </div>
      <div className="chef-list">
        <div className="chef-name">
          <h3 className="chef-heading">Chef Name</h3>
          {chef.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </div>
        <div className="chef-order">
          <h3 className="chef-heading">Order Taken</h3>
          {chef.map((item) => (
            <li key={item._id}>{item.orderTaken}</li>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
