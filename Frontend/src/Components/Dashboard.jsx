import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import orderLogo from "../assets/total-order.png";
import chefLogo from "../assets/total-chef.png";
import clientLogo from "../assets/total-clients.png";
import revLogo from "../assets/total-rev.png";
import { Chart as ChartJS } from "chart.js/auto";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Doughnut } from "react-chartjs-2";
import sourceData from "../assets/Source/Data.json";
import { TableArrange } from "./TableArrange";
const Dashboard = () => {
  const [chef, setChef] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchChefs();
  }, []);
  const totalChef = () => {
    return chef?.length;
  };

  const fetchChefs = async () => {
    try {
      const res = await axios.get(
        "https://restaurent-backend-bzlm.onrender.com/api/chefs"
      );
      setChef(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <div className="loading">Loading menu...</div>;
  if (error) return <div className="error">Error: {error}</div>;
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
              <p style={{ margin: "5px 0", fontSize: "12px" }}>
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
                05 <br />
                Dine In
              </div>
              <div className="order-type">
                06 <br />
                Take Away
              </div>
            </div>
          </div>
          <div className="chart-doughnut">
            <Doughnut
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Count",
                    data: [300, 50, 100],
                    backgroundColor: ["#5B5B5B", "#828282", "#2C2C2C"],
                    hoverOffset: 3,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                layout: { padding: 10 },
                plugins: {
                  legend: {
                    position: "right",
                    align: "center",
                    labels: {
                      padding: 10,
                      font: {
                        size: 12,
                      },
                      usePointStyle: "true",
                      pointStyle: "rect",
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="chart-box-2">
          <div className="chart-box">
            <div className="chart-title-box">
              <div>
                <h4 style={{ margin: "0" }}>Revenue</h4>
                <p style={{ margin: "5px 0", fontSize: "12px" }}>
                  Profit tells the real story of Business.
                </p>
              </div>
              <div>filter</div>
            </div>
            <div className="chart-stats">
              <div className="rev-graph"></div>
            </div>
          </div>
        </div>
        <div className="chart-box-3">
          <div className="chart-box">
            <div className="chart-title-box">
              <div>
                <h4 style={{ margin: "0" }}>Tables</h4>
                <p style={{ margin: "0", fontSize: "12px" }}>
                  Here is the Table Mangement Flow.
                </p>
              </div>
              <div>Reserved</div>
            </div>
            <div className="chart-stats">
              <TableArrange />
            </div>
          </div>
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
