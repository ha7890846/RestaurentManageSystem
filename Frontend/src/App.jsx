import "./App.css";
import Homepage from "./Components/Homepage";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tables from "./Components/Tables";
import Orders from "./Components/Orders";
import MenuPage from "./Components/MenuPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
          <Route path="/menu/:category" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
