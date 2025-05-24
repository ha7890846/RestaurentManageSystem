import "./App.css";
import Homepage from "./Components/Homepage";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tables from "./Components/Tables";
import Orders from "./Components/Orders";
import OrderCart from "./Components/OrderCart";
import Burgers from "./Components/Burgers";
import Pizza from "./Components/Pizza";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="/cart" element={<OrderCart />}>
          <Route path="/cart/burger" element={<Burgers />} />
          <Route path="/cart/pizza" element={<Pizza />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
